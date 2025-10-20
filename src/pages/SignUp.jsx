import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({email, password});
    }
    return (
        <div className='bg-base-200 '>
         <div className="hero min-h-[calc(100vh-124px)]">


    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <h1 className="text-3xl text-center font-bold">SignUp now!</h1>

<input type="text" className="input outline-none" name="text" placeholder="Enter Your Name"/>
<input type='url' className="input outline-none" name="url" placeholder="Photo URL"/>
<input type="email" className="input outline-none" name="email" placeholder="Enter Your Email"/>
<input type="password" className="input outline-none" name="password" placeholder="Password"/>

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