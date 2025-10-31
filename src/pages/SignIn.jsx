import React, { useRef, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const emailRef = useRef(null);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    if (password.length < 6) {
      toast.warning("Password should be at least 6 digit");
      return;
    }
    // password validation
    const regularExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|]).{6,}$/;

    if (!regularExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include uppercase, lowercase, number and one special character."
      );
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const currentUser = res.user;
        setUser(currentUser);
        toast.success("SignIn Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const currentUser = res.user;
        setUser(currentUser);
        toast.success("SignIn Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
        toast.success("SigOut Successfully", { position: "bottom-right" });
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className=" bg-base-200">
      <div className="hero min-h-[calc(100vh-124px)]">
        <div className="card bg-base-100 w-full  max-w-sm  shadow-2xl">
          <div className="card-body">
            {user ? (
              <div className="">
                <ul className="flex flex-col gap-3 bg-base-100 rounded-box z-1  py-1 shadow">
                  <div className="bg-base-200 flex flex-col justify-center items-center  p-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />

                    <h2>{user.displayName}</h2>
                    <h3>{user.email}</h3>
                  </div>

                  <li className="px-4">
                    <a>Profile</a>
                  </li>
                  <li className="px-4">
                    <a>Settings</a>
                  </li>
                  <hr />
                  <button onClick={handleSignOut} className=" btn-accent btn">
                    Sign Out
                  </button>
                </ul>
              </div>
            ) : (
              <form onSubmit={handleSignIn} className="fieldset ">
                <h1 className="text-3xl text-center font-bold">SignIn now!</h1>

                <input
                  type="email"
                  className="input outline-none"
                  ref={emailRef}
                  name="email"
                  placeholder="Enter Your Email"
                />
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    className="input outline-none"
                    name="password"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="top-2 right-7 absolute cursor-pointer z-50"
                  >
                    {show ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                  </span>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handlePasswordReset}
                    className="link link-hover"
                  >
                    Forgot password?
                  </button>
                </div>
                <button className="btn btn-neutral mt-4">SignIn</button>

                <div className="space-y-2">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn w-full hover:bg-base-300 bg-white text-black border-[#e5e5e5]"
                  >
                    <FcGoogle />
                    Login with Google
                  </button>
                  <button className="btn w-full bg-white hover:bg-base-300 text-black border-[#e5e5e5]">
                    <FaGithub />
                    Login with GitHub
                  </button>
                </div>

                <h3>
                  Don't have an Account ? please{" "}
                  <Link
                    to="/signUp"
                    className="text-blue-600 font-bold underline"
                  >
                    SignUp
                  </Link>
                </h3>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
