import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const SignIn = () => {
     const [show, setShow] = useState(false)
        const handleSignIn=(e)=>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
    
            console.log({email, password});
          // if(password.length < 6){
          //   toast.warning("Password should be at least 6 digit");
          //   return;
          // }
          // password validation 
          const regularExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|]).{6,}$/;
      
          if(!regularExp.test(password)){
            toast.error( "Password must be at least 6 characters long and include uppercase, lowercase, number and one special character.");
            return;
          }
    
            signInWithEmailAndPassword(auth, email, password)
            .then((res)=>{
              console.log(res);
              toast.success("SignIn Successfully")
            })
            .catch((error)=>{
              console.log(error);
              toast.error(error.message)
            })
    
        }
    return (
        <div className=' bg-base-200'>
         <div className="hero min-h-[calc(100vh-124px)]">


    <div className="card bg-base-100 w-full  max-w-sm  shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset ">
          <h1 className="text-3xl text-center font-bold">SignIn now!</h1>

<input type="email" className="input outline-none" name="email" placeholder="Enter Your Email"/>
<div className='relative'>
  <input  type={show?"text" :"password"} className="input outline-none" name="password" placeholder="Password"/>
  <span onClick={()=>setShow(!show)} className='top-2 right-7 absolute cursor-pointer z-50'>
   {show? <FaEye size={20}/> : <FaEyeSlash size={20}/> }
  </span>
</div>

          <div><Link className="link link-hover">Forgot password?</Link></div>
          <button className="btn btn-neutral mt-4">SignIn</button>
        </form>

       <div className='space-y-2'>
<button className="btn w-full hover:bg-base-300 bg-white text-black border-[#e5e5e5]">
 <FcGoogle/>
  Login with Google
</button>
<button className="btn w-full bg-white hover:bg-base-300 text-black border-[#e5e5e5]">
  <FaGithub />
  Login with GitHub
</button>
       </div>

        <h3>Don't have an Account ? please <Link to="/signUp" className='text-blue-600 font-bold underline'>SignUp</Link></h3>
      </div>
    </div>
  </div>
</div>
      
    );
};

export default SignIn;