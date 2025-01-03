import { useState } from 'react';
import Logo from './images/Title.png';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
function Nav() {
  
  const[isOpen,setIsOpen]=useState(false);
  return (
    <>
    <div className='flex justify-between items-center h-20  mx-auto px-4'>
      
        <img src={Logo} alt="Logo" className='size-12  ' />
       
      <ul className='hidden md:flex  pr-32 '>
        <li className='p-5 hover:text-blue-400'>Home</li>
        <li className='p-5 hover:text-blue-400'>About</li>
        <li className='p-5 hover:text-blue-400'>Contact</li>
        <li className='p-5 hover:text-blue-400'>Blog</li>
        <li className='p-5 hover:text-blue-400'>Help</li>
       
        
      </ul>
      <div className='md:hidden z-10' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <RxCross2 className='text-3xl cursor-pointer' />
        ) : (
          <IoMdMenu className='text-3xl cursor-pointer' />
        )}
      </div>

      <div className={`${
          isOpen ? 'left-0' : '-left-full'
        } top-0 fixed w-[60%] h-full bg-white border-r border-gray-300 ease-in-out duration-300 md:hidden`}
> <img src={Logo} alt="Logo" className='size-12 absolute mt-8 ml-3   ' />
      
      <ul className='pt-24 uppercase'>
        <li className='p-4 border-b border-gray-300  hover:text-blue-400'>Home</li>
        <li className='p-4 border-b border-gray-300 hover:text-blue-400'>About</li>
        <li className='p-4 border-b border-gray-300 hover:text-blue-400'>Contact</li>
        <li className='p-4 border-b border-gray-300 hover:text-blue-400'>Blog</li>
        <li className='p-4  hover:text-blue-400'>Help</li>
       
        
      </ul>
      </div>
      
     
    </div>
    </>
  );
}

export default Nav;
