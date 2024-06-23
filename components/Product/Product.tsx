import { BasketIcon, LikeIcon, LupaIcon } from "@/assets/icns";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface Producttype {
  item: any;
  setRefresh: (value: boolean) => void;
  refresh: boolean;
}

const token = window.localStorage.getItem("token");
export const Product: React.FC<Producttype> = ({
  item,
  setRefresh,
  refresh,
}) => {


  const handleLikeClick = (id:string) => {
    axios.post(`http://3.70.236.23:7777/v1/like/${id}`,{},{
      headers:{
        "Authorization":"Bearer " + window.localStorage.getItem("token")
      }
    }).then(res => {
      setRefresh(!refresh)
       })
  }


  const handleBasketClick = (id:string) => {
    axios.post(`http://3.70.236.23:7777/v1/basket`, {
      productId: id
    }, {
      headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("token") 
      }
    }).then(res => {
      setRefresh(!refresh);
    }).catch(error => {
     
      console.error('Request error:', error);
    });
  }
  




  return (
   
    
    <Link  href={`/shop/${item?.product_id}`}  className=" inline-block w-[258px] ">
      <div className=" bg-[#FBFBFB] pt-[31px] pb-[18px] overflow-hidden product-image-wrapper relative">
        <Image
          src={item.image ? item.image : ""}
          width={250}
          height={250}
          alt="product Image"
        />
        <ul className="flex cursor-pointer items-center product-image-list justify-center space-x-[10px] left-0 right-0 bottom-[-40px] top-[20] absolute">
          <li
            onClick={() => handleBasketClick(item.product_id)}
            className={`hover:opacity-[2] w-[35px] h-[35px] flex items-center justify-center ${
              item.liked ? "bg-green-500" : "text-black"
            }`}
          >
            <BasketIcon />
          </li>
          <li
            onClick={() => handleLikeClick(item.product_id)}
            className={` w-[35px] cursor-pointer h-[35px] flex items-center justify-center ${
              item.liked ? "text-red-500" : "text-black"
            }`}
          >
            <LikeIcon />
          </li>
          <li className=" w-[35px] h-[35px] flex items-center justify-center ">
            <LupaIcon />
          </li>
        </ul>
      </div>
      <h2 className="text-[16px] leading-[16px] text-[#3D3D3D] mt-[12xp] mb-[6px]">
        {item.product_name}
      </h2>
      <p className=" text-[#46a358] text-[18px] leading-[16px] font-bold">
        {item.cost}
      </p>
    </Link>
  );
};
