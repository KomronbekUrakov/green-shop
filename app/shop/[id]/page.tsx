"use client";
import axios from "axios";
import Image from "next/image";

import React, { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const id = params.id;
  const [singleData, setSingleData] = useState<any>({});
  const [activeImg, setActiveImg] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  useEffect(() => {
    axios.get(`http://3.70.236.23:7777/v1/product/${id}`).then((res) => {
      setSingleData(res.data);
      setActiveImg(res.data.image_url[0]);
    });
  }, [id]);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  console.log("asdad" + singleData);

  if (!singleData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto pt-[70px] flex gap-10">
        <div className="flex">
          <div className="w-[80px] h-[444px] overflow-y-auto flex flex-col gap-2">
            {singleData?.image_url?.map((item: any, index: number) => (
              <Image
                key={index}
                src={item}
                alt="Product Image"
                width={100}
                height={100}
                className={`cursor-pointer border-[0.5px] ${
                  activeImg === item ? "border-green-500" : "border-gray-300"
                }`}
                onClick={() => setActiveImg(item)}
              />
            ))}
          </div>
          <div className="w-[444px] ml-5">
            <Image
              src={activeImg}
              alt="Active Product Image"
              width={444}
              height={444}
              className="shadow-md shadow-black hover:scale-[0.8] duration-150"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between h-[530px]">
          <div>
            <h1 className="text-2xl font-bold">{singleData.product_name}</h1>
            <p className="text-lg font-semibold">Price: ${singleData.cost}</p>
            <p className="text-lg">
              <span className="font-semibold">Product Short description:</span>{" "}
              {singleData.short_description}
            </p>
            <div className="mt-2">
              <span className="font-semibold">Sizes: </span>
              {singleData.size?.map((size: string) => (
                <span key={size} className="ml-2">
                  {size}
                </span>
              ))}
            </div>
            <p className="mt-2">
              <span className="font-semibold">SKU: </span>
              {singleData.category_id}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Product Status: </span>
              {singleData.product_status}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Categories: </span>
              {singleData.categories ? singleData.categories.join(", ") : "N/A"}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Tags: </span>
              {singleData.tags ? singleData.tags.join(", ") : "N/A"}
            </p>
            <div className="flex items-center mt-4">
              <button
                onClick={handleDecrease}
                className="text-white bg-[#46A358] w-[35px] h-[35px] rounded-full outline-none"
              >
                -
              </button>
              <span className="mx-2 text-lg">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="text-white bg-[#46A358] w-[35px] h-[35px] rounded-full outline-none"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <button className=" bg-green-500 text-center w-[49%] text-white py-2 px-4 rounded outline-none border-[2px] border-[#46A358] hover:opacity-60 duration-75">
              Buy Now
            </button>
            <a
              className="text-[#46A358] w-[40%] blok text-center bg-white border-[#46A358] border-[1px] rounded-md py-2 px-4"
              href="#"
            >
              Add to cart
            </a>
            <a href="#">
              <div className=" w-[40px] h-[40px] p-[10px] border-green-500 rounded-md">
                <Image src={"/heart.png"} alt="heart" width={20} height={20} />
              </div>
            </a>
          </div>
          <div className="flex space-x-[16px]">

          <p>Share this products:</p>
          <Image src={"/Facebook.svg"} alt="heart" width={7.5} height={15} />
          <Image src={"/Twitter.svg"} alt="heart" width={15} height={12.9} />
          <Image src={"/Linkedin.svg"} alt="heart" width={15} height={14.38} />
          <Image src={"/Message.svg"} alt="heart" width={18} height={18} />
          
          
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <h4 className="text-[#46A358] font-bold text-[17px] mb-5">
          Product Description
        </h4>
        <p className="text-[#727272] text-[14px]">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec
          est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
          ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
          adipiscing cursus eu, suscipit id nulla. <br /> <br />
          Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
          sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
          Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
          vulputate, sapien libero hendrerit est, sed commodo augue nisi non
          neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
          accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
          luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula
          euismod eget. The ceramic cylinder planters come with a wooden stand
          to help elevate your plants off the ground.{" "}
        </p>
      </div>
    </div>
  );
};

export default Page;
