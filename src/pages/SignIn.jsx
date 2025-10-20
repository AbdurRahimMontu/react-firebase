import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const SignIn = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({email, password});
    }
    return (
        <div className=' bg-base-200'>
         <div className="hero min-h-[calc(100vh-124px)]">


    <div className="card bg-base-100 w-full  max-w-sm  shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset ">
          <h1 className="text-3xl text-center font-bold">SignIn now!</h1>

<input type="email" className="input outline-none" name="email" placeholder="Enter Your Email"/>
<input type="password" className="input outline-none" name="password" placeholder="Password"/>

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

        <h3>You are a new user ? please <Link to="/signUp" className='text-blue-600 font-bold underline'>SignUp</Link></h3>
      </div>
    </div>
  </div>
</div>
      
    );
};

export default SignIn;