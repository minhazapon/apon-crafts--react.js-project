
import 'animate.css';

import Marquee from "react-fast-marquee";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Up = () => {


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


  


    return (
        <div className=' mb-16 mt-16 '>
            
                   <div>


                    <div  className=" flex-col md:flex-row bg-slate-100  border-[1px] border-secondary p-5 rounded-xl" >

                    <div>

                    <Marquee>
                    <h1 className=" text-secondary text-5xl font-mono font-bold text-center">
                       Update crafts Items</h1>
                    </Marquee>
                      <p className="  animate__animated  animate__zoomInDown animate__repeat-2 text-center mt-3 font-bold text-2xl">“There is no wrong way to make pretty things.”</p>
                    
                    </div>
                    
                    <div className=" mt-3 flex justify-center">
                    
                    
                    <form  onSubmit={handleF} className=' flex-col md:flex-row'  >
                    
                    <div className="  animate__animated  animate__rotateInUpRight animate__repeat-2 grid  md:grid-cols-2 gap-5">
                    <div>
                     <h1 className=" text-xl font-bold">Name:</h1>
                     <input className=" mt-1 bg-white p-1  w-[350px] border-[1px] border-black  "
                      placeholder="Enter coffee name" name="name" type="text" />
                    </div>

                    <div>
                     <h1 className=" text-xl font-bold">subcategory_Name
                       :</h1>
                     <input className=" mt-1 bg-white p-1  w-[350px]  border-[1px] border-black "
                      placeholder="Enter subcategory_Name 
                      " type="text" name='subcategory' />
                    </div>
                    
                    <div>
                     <h1 className=" text-xl font-bold">short description
                        :</h1>
                     <input className=" mt-1 bg-white p-1  w-[350px] border-[1px] border-black  "
                      placeholder="Enter short description
                      " type="text" name='description' />
                    </div>
                    
                    <div>
                     <h1 className=" text-xl font-bold">price:</h1>
                     <input className=" mt-1 bg-white  p-1  w-[350px] border-[1px] border-black  "
                      placeholder="Enter price" name='price' type="text" />
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
                      " type="text" name='User' />
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
                    <div className=" flex justify-start flex-col md:flex-row">
                    <div className="  flex-col md:flex-row lg:flex-row   ">
                    <input   className="  text-white mt-4 btn w-[350px] bg-secondary  " type="submit" value="Update Items" />
                    <ToastContainer />      
                    </div>
                    </div>


                    </form>
                     
                  
                    </div>
                   
                  


                       
                    
                    
                   


</div>










            </div>



            
        </div>
    );
};

export default Up;