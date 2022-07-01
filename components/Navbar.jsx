import Link from "next/link";
import React, { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const MenuItems=({isMobile,active,setActive,setOpen})=>{

    const generateLink=(i)=>{
        switch(i){
            case 0:
                return '#about';
             case 1:
                return "#services"   
             case 2:
                return "#clients"   
             case 3:
                return "#chat"   
        }
    }

    return (
        <>
        <ul className={` ${isMobile ? 'flex flex-col space-y-10' : 'md:flex space-x-10 hidden flex-row'  } `}>
           {['About','Services','Clients','Chat'].map((item,i)=>(
            <li key={i}
            onClick={()=>{setActive(item);setOpen(false)}}
            className={`text-gray-600 font-semibold curso link ${active===item ? 'text-black font-bold':'' } `}
            >
{/* <Link href={generateLink(i)}>{item}</Link> */}
<a href={generateLink(i)} className='cursor-pointer'>{item}</a>
            </li>
           ))} 
        </ul>
        </>
    )
}

const Navbar = () => {

    const [active,setActive]=useState(false)
    const [open,setOpen]=useState(false)
    

  return (
    <div className={` ${open ? 'w-full h-screen bg-orange-300 flex relative items-center flex-col pt-10' : 'w-full px-10 py-3 flex justify-between items-center' } `}>
      {/* logo  */}
      <div>
        <h1 className="font-extrabold  text-2xl drop-shadow-lg text-black">
          SINGHS<span className="text-red-500">FIT</span>{" "}
        </h1>
      </div>

      {/* links  */}
      <div className="px-10">

       <MenuItems active={active} setActive={setActive} setOpen={setOpen} />

{!open ? <p className="block md:hidden text-2xl cursor-pointer" onClick={()=>{setOpen(true)}} > <AiOutlineMenu/> </p> : <p className="block md:hidden z-[9999] fixed top-[40px] right-[40px]  cursor-pointer text-2xl text-white font-bold" onClick={()=>setOpen(false)} > X </p> }

      </div>

{open && <div className="fixed inset-0 top-65 flex items-center justify-center transition-all ease-in-out duration-200">
<MenuItems active={active} setActive={setActive} isMobile setOpen={setOpen}  />
</div> }

    </div>
  );
};

export default Navbar;
