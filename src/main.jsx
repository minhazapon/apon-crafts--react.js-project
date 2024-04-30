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
import Up from './Up';
import CraftsInformation from './CraftsInformation';
import Card from './Table/Card';
import Wood from './Table/Wood';
import Bag from './Table/Bag';
import Paper from './Table/Paper';
import Gallery from './Gallery/Gallery';
import CraftsShop from './crafts shop/CraftsShop';
import Scissors from '../ItemsDetails/Scissors';
import W2 from '../ItemsDetails/W2';
import F3 from '../ItemsDetails/F3';
import P4 from '../ItemsDetails/P4';
import T5 from '../ItemsDetails/T5';
import Tape6 from '../ItemsDetails/Tape6';


 
 
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
       {
         path: "/up",
         element:  <Up></Up> ,
       },
       {
         path: "/info",
         element: <CraftsInformation></CraftsInformation> ,
       },
       {
         path: "/card",
         element: <Card></Card> ,
       },
       {
         path: "/wood",
         element: <Wood></Wood> ,
       },
       {
         path: "/bag",
         element: <Bag></Bag> ,
       },
       {
         path: "/paper",
         element: <Paper></Paper> ,
       },
       {
         path: "/gallery",
         element: <Gallery></Gallery> ,
       },
       {
         path: "/shop",
         element: <CraftsShop></CraftsShop> ,
       },
       {
         path: "/s",
         element: <Scissors></Scissors> ,
       },
       {
         path: "/w",
         element: <W2></W2> ,
       },
       {
         path: "/f",
         element: <F3></F3> ,
       },
       {
         path: "/p",
         element: <P4></P4> ,
       },
       {
         path: "/t",
         element: <T5></T5> ,
       },
       {
         path: "/tape",
         element: <Tape6></Tape6> ,
       },
      
     ],
   },
 ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
