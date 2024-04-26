

import 'animate.css';


const Cinformation = () => {
    return (
        <div className=" mb-10 mt-10">

            <div>



                <div>
                  <h1 className=" animate__animated animate__zoomInDown text-6xl font-bold text-center text-secondary">crafts Information</h1>
                   <p className=' animate__animated animate__rollIn   text-center mt-3 text-2xl text-secondary'>“The beauty of handmade is in the imperfections.”
                   </p>

                </div>




                <div className=' animate__animated animate__flip '>

                   <img className=' border-[1px] border-secondary rounded-xl animate__animated animate__rollIn  h-[200px] w-[300px]'
                    src="https://img.freepik.com/free-photo/person-scrapbooking-home_23-2149614045.jpg?t=st=1714127689~exp=1714131289~hmac=c8d4cfe093ec17f4c438db70186e7eae97ff8e22ac4e1945b7b4f0f9b47c8c96&w=740 " alt="" />

                  <p className=' mt-1 mb-1 text-xl'>A craft or trade is a pastime <br></br>or an occupation that requires<br></br> particular skills<br></br>
                     and knowledge of skilled work. <br></br> In a historical sense, particularly <br></br>the Middle Ages and earlier</p>

                    <div className=' mt-2 text-white rounded-xl p-3 w-[300px] text-xl bg-secondary '>
                        <h1>A handicraft, sometimes more <br></br> precisely expressed as artisanal <br></br> handicraft or handmade, <br></br> is any of a wide <br></br> variety of types of work where <br></br> useful and decorative</h1>

                    </div>


                </div>















            </div>
            
        </div>
    );
};

export default Cinformation;