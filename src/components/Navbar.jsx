import React from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';

const Navbar = () => {
  const links = <>
         <li><MyLink to="/">Home</MyLink></li>
         <li><MyLink to="/about">About Us</MyLink></li>
         <li><MyLink to="/profile">Profile</MyLink></li>
  </>
    return (
        <div className='bg-base-100 shadow-sm'>
            

<div className="w-11/12 mx-auto py-4  flex justify-between items-center">
    {/* navbar start */}
  <div className="flex items-center gap-3 lg:gap-0">
     <div className="dropdown">
      <div tabIndex={0} role="button" className="cursor-pointer lg:hidden">
          <TfiMenu size={24}/>
      </div>
      <ul
        tabIndex="-1"
        className=" dropdown-content lg:hidden  bg-base-100 rounded-box z-1 mt-7 w-52 h-96  shadow space-y-2">
     {links}
      </ul>
    </div>
     <Link to="/" className=" text-xl">DaisyUI</Link>
  </div>

  {/* navbar enter */}

    <ul className="hidden gap-5 lg:flex ">
     {links}
    </ul>


  {/* navbar end */}
  <div className="space-x-2 flex">
    <Link to="/signIn" className="btn btn-active btn-primary px-8">Login</Link>
     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="cursor-pointer">
        
          <img className="w-10 h-10 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
 
      </div>
      <ul
        tabIndex="-1"
        className=" dropdown-content flex flex-col gap-3 bg-base-100 rounded-box z-1  py-1 mt-6 w-60 h-96 shadow">
     
        <div className='bg-base-200 flex flex-col justify-center items-center  p-2'>
         
            <img className="w-10 h-10 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
         
          <h2>Abdur Rahim</h2>
         <h3>abdurrahim9977@gmail.com</h3> 
        </div>
    
        
        <li className='px-4'><a>Profile</a></li>
        <li className='px-4'><a>Settings</a></li>
        <hr  /> 
        <li className=' btn-accent btn'><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  </div>


        
    );
};

export default Navbar;