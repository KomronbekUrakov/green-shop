import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
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
    </div>
  )
}

export default page