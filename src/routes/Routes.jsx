import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Profile from '../components/Profile';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[{
           path:"/",
           element:<Home></Home>
        },
        {
            path:"/about",
            element:<AboutUs></AboutUs>
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
               {
        
            path:"/signUp",
            element:<SignUp></SignUp>
       },
       {
        
            path:"/signIn",
            element:<SignIn></SignIn>
       },
       ]},

])

export default Routes;