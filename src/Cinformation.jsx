

import 'animate.css';


const Cinformation = () => {
    return (
        <div className="  mb-32 mt-10">


            <div>



                <div>
                  <h1 className=" animate__animated animate__zoomInDown text-6xl font-bold text-center text-secondary">crafts Information</h1>
                   <p className=' animate__animated animate__rollIn   text-center mt-3 text-2xl text-secondary'>“The beauty of handmade is in the imperfections.”
                   </p>
                </div>

               <div className=' flex-col md:flex-row lg:flex-row flex justify-center items-center gap-20 mt-10'>


                <div className=' animate__animated animate__flip animate__repeat-2 '>
                   <img className=' border-[1px] border-secondary rounded-xl animate__animated animate__rollIn  h-[200px] w-[300px]'
                    src="https://img.freepik.com/free-photo/person-scrapbooking-home_23-2149614045.jpg?t=st=1714127689~exp=1714131289~hmac=c8d4cfe093ec17f4c438db70186e7eae97ff8e22ac4e1945b7b4f0f9b47c8c96&w=740 " alt="" />
                  <p className=' mt-1 mb-1 text-xl'>A craft or trade is a pastime <br></br>or an occupation that requires<br></br> particular skills<br></br>
                     and knowledge of skilled work. <br></br> In a historical sense, particularly <br></br>the Middle Ages and earlier</p>
                    <div className=' mt-2 text-white rounded-xl p-3 w-[300px] text-xl  bg-blue-600 '>
                        <h1>A handicraft, sometimes more <br></br> precisely expressed as artisanal <br></br> handicraft or handmade, <br></br> is any of a wide <br></br> variety of types of work where <br></br> useful and decorative</h1>
                    </div>
                </div>



                
                <div className=' -mb-20 animate__animated animate__flip animate__repeat-2 '>
                <div className=' mt-2 text-white rounded-xl p-3 w-[300px] text-xl bg-violet-800  '>
                        <h1>Arts and crafts describes a wide variety of activities involving making things with one's own hands. Arts and crafts is usually a hobby. Some crafts (art skills) have been practised since preshistoric times</h1>
                    </div>
                  <p className=' mt-1 mb-1 text-xl'>Historically, the more specialized<br></br> crafts with high-value products <br></br> tended to concentrate <br></br>in urban centers and <br></br> their practitioners<br></br> formed guilds. </p>
                     <img className=' border-[1px] border-secondary rounded-xl animate__animated animate__rollIn  h-[200px] w-[300px]'
                    src="  https://img.freepik.com/free-photo/vibrant-summer-picnic-table-with-colorful-decorations-generated-by-ai_188544-54137.jpg?t=st=1714131432~exp=1714135032~hmac=6ae018560697c881a0a757ddd6a703535fda420520d05c9baec6e125cf28bf8e&w=826   " alt="" />
                </div>
                </div>

            </div>





         {/* ---------------------------------------- */}








             <div className=' mt-28 '>

              <div className="hero min-h-screen rounded-xl" 
              style={{backgroundImage: 'url( https://www.shutterstock.com/image-photo/arts-craft-supplies-corrugated-color-600nw-351226619.jpg  )'}}>
                <div className=" rounded-xl hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                </div>
              </div>


             </div>

 
            
            <div className='  flex justify-center ' >

             <div className=' animate__animated  -mt-36 grid  md:grid-cols-4 gap-16'>


             <div className=' animate__animated animate__fadeInBottomLeft animate__repeat-2 h-[280px] rounded-xl p-3 bg-white w-[200px] border-[1px] border-black shadow-2xl'>
                <h1 className=' text-6xl font-bold text-secondary'>01</h1>
                <p className=' text-blue-600 mt-2 text-2xl font-bold'>About us</p>
                <p className=' text-xl mt-2'>Our company is a best<br></br> crafts company,<br></br> we provide best<br></br> products for client</p>
             </div>
            


             <div className='  animate__animated animate__fadeInBottomLeft animate__repeat-2 h-[280px] rounded-xl p-3 bg-white w-[200px] border-[1px] border-black shadow-2xl'>
                <h1 className=' text-6xl font-bold text-secondary'>02</h1>
                <p className=' text-blue-600 mt-2 text-2xl font-bold'>Our Products</p>
                <p className=' text-xl mt-2'>Our products is a best<br></br> crafts products,<br></br> we provide best<br></br> products for client</p>
             </div>


             <div className=' animate__animated animate__fadeInBottomRight animate__repeat-2 h-[280px] rounded-xl p-3 bg-white w-[200px] border-[1px] border-black shadow-2xl'>
                <h1 className=' text-6xl font-bold text-secondary'>03</h1>
                <p className=' text-blue-600 mt-2 text-2xl font-bold'>Our Items</p>
                <p className=' text-xl mt-2'> Our company make cards, wedding card, birthday and alls   </p>
             </div>

             <div className=' animate__animated animate__fadeInBottomRight animate__repeat-2 h-[280px] rounded-xl p-3 bg-white w-[200px] border-[1px] border-black shadow-2xl'>
                <h1 className=' text-6xl font-bold text-secondary'>04</h1>
                <p className=' text-blue-600 mt-2 text-2xl font-bold'>Our Clients</p>
                <p className=' text-xl mt-2'>  Our company give service in world wide 400+ companies and 1500 clients   </p>
             </div>

             </div>


             </div>
            







            
        </div>
    );
};

export default Cinformation;