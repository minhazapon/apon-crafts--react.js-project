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
import Items from './Items';

 
 
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
         loader: () => fetch('card.json') ,
       },
       {
         path: "/crafts/:Id",
         element:  <Items></Items> ,
         loader: ({params}) => fetch(`card.json/${params.Id}`) ,
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
