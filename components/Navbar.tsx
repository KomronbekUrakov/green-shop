'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = () =>{
   interface NavListType {
    id:number,
    title:string,
    path:string,
    isActive:boolean   
  }
const pathname = usePathname()
  const navList = [
    {id:1,title:"Home",path:"/", isActive:pathname == "/" ? true : false},
    {id:2,title:"Shop",path:"/shop", isActive:pathname.includes("/shop") ? true : false},
    {id:3,title:"Plant",path:"/plant", isActive:pathname == "/plant" ? true : false},
    {id:4,title:"Blogs",path:"/blogs", isActive:pathname == "/blogs" ? true : false}
  ]
  return (
    <nav>
      <ul className="flex items-center space-x-[50px] ">
        {navList.map((item:NavListType)=>(
          <Link key={item.id} className={` ${item.isActive ? "text-red border-[#46A358] border-b-[3px] font-bold": "font-normal"} text-[20px] leading-[20.11px] text-[#3D3D3D]  pb-[25px] `} href={item.path}>{item.title}</Link>
        ))}
      </ul>
    </nav>
  )
}