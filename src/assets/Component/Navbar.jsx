import React, { useState } from 'react';
import logo from "../Images/logo.png"
const Navbar = () => {

    const Links = [
        {name:"Home", link:"/"},
        {name:"About us", link:"/about us"},
        {name:"Blog", link:"/blog"},
        {name:"FAQ", link:"/faq"},
        {name:"About Surveys", link:"/surveys"},
        {name:"Login", link:"/login"},
    ];

    
    const [open,setOpen] = useState(false);

    return (
<>
<div className='shadow-md w-full py-3 top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-0 md:px-28 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                    <img src={logo} className="w-[150px] md:w-[200px]" />
                </span>
                {/* Desiginer */}
            </div>

                {/* Toggle Button */}
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>


                <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[0] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[59px]': 'top-[-490px]'}`}>
                    {
                        Links.map((e)=>(
                            <li key={e.name} className='md:ml-8 text-[12px] font-semibold md:my-0 my-5'>
                                <a href={e.link} className='text-gray-500   hover:text-gray-800 duration-500'>{e.name}</a>
                            </li>
                        ))
                    }

                </ul>
        </div>
    </div>
</>


    );
};

export default Navbar;