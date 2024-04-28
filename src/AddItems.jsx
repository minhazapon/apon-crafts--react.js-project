import {  Link } from "react-router-dom";

import 'animate.css';

import Marquee from "react-fast-marquee";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 

const AddItems = () => {


    const notify = () => toast("added items");


    return (
        <div>

            <div>



            <div>
            <div>



            <div className=" mb-40 mt-40">
             
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
               

                 <form>

                 <div className="  animate__animated  animate__rotateInUpRight animate__repeat-2 grid  md:grid-cols-2 gap-5">
                   <div>
                       <h1 className=" text-xl font-bold">Name:</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter coffee name" type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">subcategory_Name
                         :</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px]  border-[1px] border-black "
                        placeholder="Enter subcategory_Name
                        " type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">short description
                          :</h1>
                       <input className=" mt-1 bg-white p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter short description
                        " type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">price:</h1>
                       <input className=" mt-1 bg-white  p-1  w-[350px] border-[1px] border-black  "
                        placeholder="Enter price" type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">User Email:</h1>
                       <input placeholder="User Email" 
                       className="  mt-1 bg-white  p-1  w-[350px] border-[1px] border-black " 
                       type="email" name="" id="" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">User Name
                         :</h1>
                       <input className=" mt-1 bg-white p-1 w-[350px]  border-[1px] border-black "
                        placeholder="Enter User Name
                        " type="text" />
                   </div>

                   <div>
                       <h1 className=" text-xl font-bold">Photo:</h1>
                       <input className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black "
                        placeholder="Enter photo URL" type="url" name="" id="" />
                   </div>
                   <div>
                       <h1 className=" text-xl font-bold">rating:</h1>
                        <input
                         className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black " 
                         type="number" name="" id="" placeholder="Add Rating" />
                   </div>
                   <div>
                       <h1 className=" text-xl font-bold">customization- example- yes, no:</h1>
                        <input
                         className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black " 
                         type="number" name="" id="" placeholder="customization-Say yes Or no" />
                   </div>
                   <div>
                       <h1 className=" text-xl font-bold">processing_time
                        :</h1>
                        <input
                         className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black " 
                         type="number" name="" id="" placeholder="processing_time
                         " />
                   </div>
                   <div>
                       <h1 className=" text-xl font-bold">stockStatus
                        :</h1>
                        <input
                         className=" mt-1 bg-white  p-1  w-[350px]  border-[1px] border-black " 
                         type="number" name="" id="" placeholder="stockStatus
                         " />
                   </div>

                 </div>

                 </form>
                 </div>
              
               
                 <div className=" flex justify-center">
                 <div className="  flex-col md:flex-row lg:flex-row   ">
                  <input onClick={notify}  className="  text-white mt-4 btn w-[720px] bg-secondary  " type="submit" value="Add Items" />
                  <ToastContainer />      
                 </div>
                 </div>
                

            </div>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default AddItems;