

import 'animate.css';



const Banner = () => {
    return (

        <div>

          <div className=' mb-10 mt-10'>
                 <video className="    animate__animated animate__flip animate__repeat-2 h-full w-full rounded-lg" controls>
             <source 
             src="  https://assets.mixkit.co/videos/preview/mixkit-the-word-feels-written-in-calligraphy-50711-large.mp4  " 
             type="video/mp4" />
             Your browser does not support the video tag.
           </video>
          </div>






         <div className="">



         <div className="  flex-col md:flex-row hero min-h-screen h-[1000px] rounded-xl" style={{backgroundImage: 'url(  https://img.freepik.com/premium-photo/painter-his-workshop-3d-illustration-cartoon-character_1057-40429.jpg?w=740  )'}}>
             <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
             <div className="hero-content text-center text-neutral-content">
               <div className=" ">


{/*                  
               <div className=" flex-col md:flex-row bg-[#d3d3d3cb] w-[500px] mb-10 p-4 rounded-xl">
               
               <h1 className="  text-6xl text-secondary font-bold">Unique Craft<br></br> Cafe in World</h1>

               <p className=" text-4xl  mt-10 mb-10 text-black ">“Done is better than perfect.”

              </p>

              <button className="btn btn-secondary">View Crafts</button>
                    
            </div> */}


                     <div className="card p-4 w-[400px] bg-[#d3d3d3b4] shadow-xl">
                       <div className=" animate__animated animate__zoomInDown ">
                       <h1 className=" animate__bounceInDown  text-6xl text-secondary font-bold">Unique Craft Cafe <br></br> in World</h1>   

                       <p className=" text-4xl  mt-10 mb-10 text-black font-bold animate__bounceInDown ">“Done is better than perfect.”

                        </p>

                       <div className="card-actions justify-center">
                           <button className=" btn btn-secondary  text-xl ">view crafts</button>
                         </div>
                       </div>
                     </div>



          
              </div>
            </div>
            
            {/* ------------------------ */}



          </div>


         </div>

        </div>
    );
};

export default Banner;