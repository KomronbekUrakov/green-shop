"use client";

import HeroCarusel from "../components/HeroCarusel";
import RangeSlide from "@/components/RangeSlide";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import CustomTabs from "@/components/CustomTabs";
import { Product } from "@/components/Product/Product";
import { Pagination, Popover } from "antd";
interface CategoryType {
  category_id: string;
  category_name: string;
}
interface SizeType {
  size_id: number;
  size_name: string;
}
interface Producttype {
  product_id: string;
  product_name: string;
  cost: string;
  image: string;
}

interface TabsType {
  id: string;
  title: string;
  path: string | null;
}
export default function Home() {
  const [tagId, setTagId] = useState<string | null>("1");
  const [categoryData, setCategoryData] = useState<CategoryType[]>([]);
  const Sizedata: SizeType[] = [
    {
      size_id: 1,
      size_name: "Small",
    },
    {
      size_id: 2,
      size_name: "Medium",
    },
    {
      size_id: 3,
      size_name: "Large",
    },
  ];
  const tagData: TabsType[] = [
    {
      id: "1",
      title: "All Plats",
      path: null,
    },
    {
      id: "2",
      title: "New Arrivals",
      path: "new-arrival",
    },
    {
      id: "3",
      title: "Sale",
      path: "sale",
    },
  ];
  const token = window.localStorage.getItem("token");
  const [products, setProducts] = useState<Producttype[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [categoryid, setCategoryid] = useState<string>("");
  const [sizeid, setSizeid] = useState<string | null>(null);
  const [arrow, setArrow] = useState<string>("Show");
  const [SortProduct, setSortProduct] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [rangeValue, setRangeValue] = useState<number[] | null | string>(null);

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  useEffect(() => {
    axios
      .get("http://3.70.236.23:7777/v1/categories?page=1&limit=100")
      .then((response) => {
        setCategoryData(response.data.categories);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://3.70.236.23:7777/v1/products`, {
        params: {
          page: page,
          limit: 10,
          name: null,
          category: categoryid,
          size: sizeid,
          status: tagId,
          min_price: rangeValue ? rangeValue[0] : null,
          max_price: rangeValue ? rangeValue[1] : null,
        },
        headers: token? {
          "Authorization": "Bearer " + token,
        } : {}
      })

      .then((res) => {
        setIsLoading(false);
        setLimit(res.data.total_count);

        setProducts(
          res.data.products.map((item: any) => {
            const data: Producttype = {
              product_id: item.product_id,
              product_name: item.product_name,
              cost: item.cost,
              image: item.image_url[0],
            };
            return data;
          })
        );
      })

      .catch((err) => {
        setIsLoading(false);
      });
  }, [categoryid, sizeid, rangeValue, tagId, page, refresh]);

  return (
    <>
      <section className="pt-[12px] pb-[46px]">
        <div className="container">
          <HeroCarusel />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px]">
            <div className="w-[25%] bg-[#FBFBFB] p-[15px] ">
              <h2 className=" font-bold text-[16px] leading-[18px] ">
                Categories
              </h2>
              <ul className="pl-[12px] space-y-[15px] mt-[10px] mb-[36px]">
                {categoryData &&
                  Array.isArray(categoryData) &&
                  categoryData.length > 0 &&
                  categoryData.map((item: CategoryType) => (
                    <li
                      onClick={() => {
                        setIsLoading(true);
                        setTimeout(() => {
                          setCategoryid(item.category_name);
                        }, 500);
                      }}
                      key={item.category_id + Math.random()}
                      className={`flex justify-between items-center ${
                        categoryid == item.category_name ? "text-[#46a358]" : ""
                      }`}
                    >
                      <span>{item.category_name}</span>
                    </li>
                  ))}
              </ul>
              <h2 className="font-bold text-[16px] leading-[18px]">
                Price Range
              </h2>
              <RangeSlide setRangeValue={setRangeValue} />
              <h2 className=" font-bold text-[16px] mt-[46px] leading-[18px] ">
                Size
              </h2>
              <ul className="pl-[12px] space-y-[15px] mt-[10px] mb-[36px]">
                {Sizedata.map((item: SizeType) => (
                  <li
                    onClick={() => setSizeid(item.size_name)}
                    key={item.size_id + Math.random()}
                    className={`flex justify-between items-center ${
                      sizeid == item.size_name ? "text-[#46a358]" : ""
                    }`}
                  >
                    <span>{item.size_name}</span>
                  </li>
                ))}
              </ul>
              <Image
                src={"/Banner.png"}
                width={310}
                height={470}
                alt="asasda"
              />
            </div>
            <div className=" w-[75%]">
              <div className="flex items-center justify-between">
                {/* <CustomTabs handleTabclick={handleTabclick} /> */}
                <ul className="flex items-center space-x-[37px]">
                  {tagData.map((item: TabsType) => (
                    <li
                      className={` cursor-pointer ${
                        tagId == item.path ? " text-green-500 font-bold" : ""
                      }`}
                      onClick={() => {
                        setIsLoading(true);
                        setTimeout(() => {
                          setTagId(item.path);
                        }, 500);
                      }}
                      key={item.id}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
                <div className="flex cursor-pointer items-center ">
                  Sort by:
                  <Popover
                    placement="bottom"
                    title={""}
                    content={
                      <div>
                        <ul className=" space-y-3 w-[100px] text-center">
                          <li
                            onClick={() => setSortProduct("title")}
                            className=" hover:scale-125 duration-300 hover:font-bold cursor-pointer"
                          >
                            Title sort
                          </li>
                          <li
                            onClick={() => setSortProduct("price")}
                            className=" hover:scale-125 duration-300 hover:font-bold cursor-pointer"
                          >
                            Price sort
                          </li>
                        </ul>
                      </div>
                    }
                    arrow={mergedArrow}
                  >
                    <p>Default sorting</p>
                  </Popover>
                </div>
              </div>
              <ul className="flex gap-[30px] flex-wrap items-center mt-[31px]">
                {isLoading
                  ? "Loading..."
                  : products.length
                  ? products.map((item: Producttype) => (
                      <Product
                        setRefresh={setRefresh}
                        refresh={refresh}
                        key={item.product_id + +Math.random()}
                        item={item}
                      />
                    ))
                  : "...Empty"}
              </ul>
              <div className=" pt-[90px] flex justify-end">
                <Pagination
                  onChange={(e) => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setPage(e);
                    }, 500);
                  }}
                  defaultCurrent={page}
                  total={limit}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[40px]">
        <div className="container">
          <div className="w-full">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-[#3D3D3D] text-[30px] font-bold">
                Our Blog Posts
              </h4>
              <p className="text-[#727272] text-[14px] ">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.{" "}
              </p>
            </div>
            <div className="flex justify-between flex-wrap">
              <div className="w-[268px] bg-[#FBFBFB] mt-[30px]">
                <Image
                  className=""
                  src={"/our1.png"}
                  alt="Plant"
                  width={268}
                  height={195}
                />
                <div className="pl-[15px] py-[15px] pr-[20px] flex flex-col space-y-1">
                  <p className="text-[#46A358] text-[14px] font-medium">
                    September 12 I Read in 6 minutes
                  </p>
                  <strong className="text-[20px] font-bold">
                    Cactus & Succulent Care Tips
                  </strong>
                  <p className="text-[#727272]">
                    Cacti are succulents are easy care plants for any home or
                    patio.{" "}
                  </p>
                  <span>Read More</span>
                </div>
              </div>
              <div className="w-[268px] bg-[#FBFBFB] mt-[30px]">
                <Image
                  className=""
                  src={"/our2.png"}
                  alt="Plant"
                  width={268}
                  height={195}
                />
                <div className="pl-[15px] py-[15px] pr-[20px] flex flex-col space-y-1">
                  <p className="text-[#46A358] text-[14px] font-medium">
                    September 12 I Read in 6 minutes
                  </p>
                  <strong className="text-[20px] font-bold">
                    Top 10 Succulents for Your Home
                  </strong>
                  <p className="text-[#727272]">
                    Cacti are succulents are easy care plants for any home or
                    patio.{" "}
                  </p>
                  <span>Read More</span>
                </div>
              </div>
              <div className="w-[268px] bg-[#FBFBFB] mt-[30px]">
                <Image
                  className=""
                  src={"/our3.png"}
                  alt="Plant"
                  width={268}
                  height={195}
                />
                <div className="pl-[15px] py-[15px] pr-[20px] flex flex-col space-y-1">
                  <p className="text-[#46A358] text-[14px] font-medium">
                    September 12 I Read in 6 minutes
                  </p>
                  <strong className="text-[20px] font-bold">
                    Cacti & Succulent Care Tips
                  </strong>
                  <p className="text-[#727272]">
                    Cacti are succulents are easy care plants for any home or
                    patio.{" "}
                  </p>
                  <span>Read More</span>
                </div>
              </div>
              <div className="w-[268px] bg-[#FBFBFB] mt-[30px]">
                <Image
                  className=""
                  src={"/our4.png"}
                  alt="Plant"
                  width={268}
                  height={195}
                />
                <div className="pl-[15px] py-[15px] pr-[20px] flex flex-col space-y-1">
                  <p className="text-[#46A358] text-[14px] font-medium">
                    September 12 I Read in 6 minutes
                  </p>
                  <strong className="text-[20px] font-bold">
                    Best Houseplants Room by Room
                  </strong>
                  <p className="text-[#727272]">
                    Cacti are succulents are easy care plants for any home or
                    patio.{" "}
                  </p>
                  <span>Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
