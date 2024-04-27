 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import './index.css'
 
 
 import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 import Root from './Root';
 import Home from './Home';
import CraftsItems from './CraftsItems';
import AddItems from './AddItems';
import CraftsList from './CraftsList';
import Login from './Login';
import SignUp from './SignUp';
 
 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Root></Root>,
     children: [
       {
         path: "/",
         element: <Home></Home>,
       },
       {
         path: "/crafts",
         element: <CraftsItems></CraftsItems>,
       },
       {
         path: "/add",
         element: <AddItems></AddItems>,
       },
       {
         path: "/list",
         element:  <CraftsList></CraftsList> ,
       },
       {
         path: "/login",
         element:  <Login></Login> ,
       },
       {
         path: "/sign",
         element:  <SignUp></SignUp> ,
       },
     ],
   },
 ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
