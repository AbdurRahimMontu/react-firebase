import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [show, setShow] = useState(false)

    const handleSignUp=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({name, email, password});
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

        createUserWithEmailAndPassword(auth, email, password)
        .then((res)=>{
         const currentUser = res.user;
         updateProfile(currentUser, {
        displayName: name,
      })
          toast.success("SignUp Successfully")
        })
        .catch((error)=>{
          console.log(error);
          toast.error(error.message)
        })

    }

    return (
        <div className='bg-base-200 '>
         <div className="hero min-h-[calc(100vh-124px)]">


    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <h1 className="text-3xl text-center font-bold">SignUp now!</h1>

<input type="text" className="input outline-none" name="name" placeholder="Enter Your Name"/>
<input type='url' className="input outline-none" name="url" placeholder="Photo URL"/>
<input type="email" className="input outline-none" name="email" placeholder="Enter Your Email"/>

<div className='relative'>
  <input  type={show?"text" :"password"} className="input outline-none" name="password" placeholder="Password"/>
  <span onClick={()=>setShow(!show)} className='top-2 right-7 absolute cursor-pointer z-50'>
   {show? <FaEye size={20}/> : <FaEyeSlash size={20}/> }
  </span>
</div>

          <div><Link className="link link-hover">Forgot password?</Link></div>
          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
        <h3>Al ready have an Account please <Link to="/signIn" className='text-blue-600 font-bold underline'>SignIn</Link></h3>
      </div>
    </div>
  </div>
</div>
      
    );
};

export default SignUp;