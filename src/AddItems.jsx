import {  Link } from "react-router-dom";

import 'animate.css';

import Marquee from "react-fast-marquee";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 

const AddItems = () => {


  const handleF = e => {
      
    e.preventDefault();
     

     console.log(e.target.name.value)
     console.log(e.target.email.value)
     console.log(e.target.subcategory.value)
     console.log(e.target.description.value)
     console.log(e.target.price.value)
     console.log(e.target.User.value)
     console.log(e.target.Photo.value)
     console.log(e.target.rating.value)
     console.log(e.target.time.value)
     console.log(e.target.stock.value)
     
     toast("Update items");

   }


    // const notify = () => toast("added items");


    return (
        <div>

            <div>



            <div>
            <div>



            <div className=" mb-10 mt-40">
             
             <Link to="/" >

              <div className=" text-white bg-secondary btn  flex items-center mb-5 mt-5 gap-3">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
   

                <h1>back to Home</h1>
              </div>

              </Link>


            <div  className=" bg-slate-100  border-[1px] border-secondary p-5 rounded-xl" >

                      <div>

                      <Marquee>
                      <h1 className=" text-secondary text-5xl font-mono font-bold text-center">
                         Add crafts Items</h1>
                     </Marquee>
                        <p className="  animate__animated  animate__zoomInDown animate__repeat-2 text-center mt-3 font-bold text-2xl">“Creativity takes courage.”</p>

                      </div>

                 <div className=" mt-3 flex justify-center">
               

                 <form onSubmit={handleF}  >

                 <div className="  animate__animated  animate__rotateInUpRight animate__repeat-2 grid  md:grid-cols-2 gap-5">
                   <div>
                       <h1 className=" text-xl font-bold">Name:</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter coffee name" type="text" name="name" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">subcategory_Name
                         :</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px]  border-[1px] border-black "
                        placeholder="Enter subcategory_Name
                        " type="text" name="subcategory" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">short description
                          :</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter short description
                        " type="text" name="description" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">price:</h1>
                       <input className=" mt-1 bg-white  p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter price" type="text" name="price" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">User Email:</h1>
                       <input placeholder="User Email" 
                       className="  mt-1 bg-white  p-1  w-[350px] border-[1px] border-black " 
                       type="email" name="email" id="" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">User Name
                         :</h1>
                       <input className=" mt-1 bg-white p-1 w-[350px]  border-[1px] border-black "
                        placeholder="Enter User Name
                        " type="text" name="User" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">Photo:</h1>
                       <input className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black "
                        placeholder="Enter photo URL" type="url" name="Photo" id="" />
                   </div>
                   <div>
                       <h1 className=" text-xl font-bold">rating:</h1>
                        <input
                         className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black " 
                         type="number" name="rating" id="" placeholder="Add Rating" />
                   </div>
                   <div>
                       <h1 className=" text-xl font-bold">customization- example- yes, no:</h1>
                        <input
                         className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black " 
                         type="number" name="customization" id="" placeholder="customization-Say yes Or no" />
                   </div>
                   <div>
                       <h1 className=" text-xl font-bold">processing_time
                        :</h1>
                        <input
                         className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black " 
                         type="number" name="time" id="" placeholder="processing_time
                         " />
                   </div>
                   <div>
                       <h1 className=" text-xl font-bold">stockStatus
                        :</h1>
                        <input
                         className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black " 
                         type="number" name="stock" id="" placeholder="stockStatus
                         " />
                   </div>

                 </div>

                  
                 <div className=" flex justify-start">
                 <div className="  flex-col md:flex-row lg:flex-row   ">
                  <input  className="  text-white mt-4 btn w-[350px] bg-secondary  " type="submit" value="Add Items" />
                  <ToastContainer />      
                 </div>
                 </div>



                 </form>
                 </div>
              
               
                 
            </div>
            </div>
            </div>
            </div>
            </div>

            
            <div>

              
                 
             <Link to="/up" >
             
             <div className=" text-white bg-secondary btn  flex items-center mb-5 mt-5 gap-3">
             
               <h1>Go for Update Your Crafts</h1>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
             </div>
             
             </Link>








            </div>
            



            
        </div>
    );
};

export default AddItems;