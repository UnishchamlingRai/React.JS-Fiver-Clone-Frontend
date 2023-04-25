import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Add from "./pages/add/Add"
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './App.scss'
function App() {

  const Layout=()=>{
    return (
      <div className="app">
       <Navbar/>
       <Outlet/>
       <Footer />
    </div>
    )
   
    
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      children:[{
        path:'/',
        element:<Home />
      },{
        path:'/Gigs',
        element:<Gigs />
      },
      {
        path:'/gig/:id',
        element:<Gig/>
      },
      {
        path:'/orders',
        element:<Orders />
      },
      {
        path:'/mygigs',
        element:<MyGigs />
      },
      {
        path:'/add',
        element:<Add />
      },
      {
        path:'/messages',
        element:<Messages />
      },{
        path:'/message/:id',
        element:<Message />
      }
    ]
    },
  ]);

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}
export default App

//  press r to restart the server
//press u to show server url
//press o to open in browser
//press c to clear console
//press q to quitc