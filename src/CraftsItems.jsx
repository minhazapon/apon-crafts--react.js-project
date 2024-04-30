import { Link } from "react-router-dom";


const CraftsItems = () => {

    return (
        <div className=" mb-10">

            <div>
              <h1 className=" text-7xl text-secondary font-bold text-center">Crafts Items</h1>
              <p className=" text-center text-2xl text-blue-600">“Creativity is a wild mind and a disciplined eye.”</p>

            </div>

            <div className=" flex justify-center items-center">
            <div className=" mt-10 grid  md:grid-cols-3 gap-10">

          


             <div className="  animate__animated animate__flip animate__repeat-2 card w-96  h-[650px] shadow-xl bg-blue-700  transition duration-300 ease-in-out hover:scale-110 ">
               <figure className="px-10 pt-10">
                 <img src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MzIwNTE2NTE2MDMwMDg2/decorative-scissors-ideas-and-tips.jpg" alt="Shoes" className=" rounded-2xl h-[300px] w-[300px]  " />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title  text-white">name: Scissors   </h2>
                 <p className=" text-xl text-white"> Details: A pair of scissors consists of a pair of blades pivoted so that the sharpened edges slide against each other when the handles (bows) opposite to the pivot are closed.  </p>
                 <div className="card-actions">
                  <Link to="/s" >
                   <button className="btn btn-secondary w-[300px]"> View Details </button>
                   </Link>
                 </div>
               </div>
             </div>
             
          
                {/* 2  ----------------------- */}


                  <div className="  animate__animated animate__flip animate__repeat-2 card w-96  h-[650px] shadow-xl bg-blue-700  transition duration-300 ease-in-out hover:scale-110 ">
               <figure className="px-10 pt-10">
                 <img src=" https://m.media-amazon.com/images/I/81-ir4pUaOS._AC_UF1000,1000_QL80_DpWeblab_.jpg   " alt="Shoes" className=" rounded-2xl h-[300px] w-[300px]  " />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title  text-white">name: Watercolors   </h2>
                 <p className=" text-xl text-white"> Details: Here's your chance to create amazing watercolor paintings like you've always wanted and to spark your kids interest in art, with GenCrafts' Watercolor Paint </p>
                 <div className="card-actions">
                  <Link to="/w" >
                   <button className="btn btn-secondary w-[300px]"> View Details </button>
                   </Link>
                 </div>
               </div>
             </div>


             {/* 3 --------------       */}



             <div className="  animate__animated animate__flip animate__repeat-2 card w-96  h-[650px] shadow-xl bg-blue-700  transition duration-300 ease-in-out hover:scale-110 ">
               <figure className="px-10 pt-10">
                 <img src="https://img.freepik.com/premium-photo/top-view-felt-decorations-scissors-beads-kids-diy-crafts-tutorial_290431-18086.jpg?w=740" alt="Shoes" className=" rounded-2xl h-[300px] w-[300px]  " />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title  text-white">name: Felt   </h2>
                 <p className=" text-xl text-white"> Details: Felt is a textile material that is produced by matting, condensing and pressing fibers together. condensing and pressing fibers together. pressing fibers together.  </p>
                 <div className="card-actions">
                  <Link to="/f"  >
                   <button className="btn btn-secondary w-[300px]"> View Details </button>
                   </Link>
                 </div>
               </div>
             </div>



             {/* 4 -------------------- */}



             <div className="  animate__animated animate__flip animate__repeat-2 card w-96  h-[650px] shadow-xl bg-blue-700  transition duration-300 ease-in-out hover:scale-110 ">
               <figure className="px-10 pt-10">
                 <img src="https://img.freepik.com/free-photo/colorful-pencils-pencil-pot_23-2147847395.jpg?t=st=1714277597~exp=1714281197~hmac=a832c9eec3cafcc1e2625d9c0cc827ad150c31c725aecd694e02ba4ffa775033&w=740" alt="Shoes" className=" rounded-2xl h-[300px] w-[300px]  " />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title  text-white">name: Pencil   </h2>
                 <p className=" text-xl text-white"> Details: This pencil craft builds so many skills! Work on coloring, cutting, and pasting, but also expand skills with a fun pencil theme. fun pencil theme fun pencil theme  </p>
                 <div className="card-actions">
                  <Link to="/p" >
                   <button className="btn btn-secondary w-[300px]"> View Details </button>
                   </Link>
                 </div>
               </div>
             </div>


             {/* 5 ------------------------- */}



             <div className="  animate__animated animate__flip animate__repeat-2 card w-96  h-[650px] shadow-xl bg-blue-700  transition duration-300 ease-in-out hover:scale-110 ">
               <figure className="px-10 pt-10">
                 <img src="https://img.freepik.com/free-photo/elevated-view-woman-s-hand-holding-handmade-paper_23-2147845594.jpg?t=st=1714277763~exp=1714281363~hmac=2e0bf06c74d271c803f117725dcb3bfc62518e28c5b1960bd157896add723e67&w=740" alt="Shoes" className=" rounded-2xl h-[300px] w-[300px]  " />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title  text-white">name: Tissue Paper   </h2>
                 <p className=" text-xl text-white"> Details: Tissue paper is made from the processing of cellulose pulp obtained from wood fiber. Tissue paper is made from the processing of cellulose pulp obtained from wood fiber.  </p>
                 <div className="card-actions">
                  <Link to="/t"  >
                   <button className="btn btn-secondary w-[300px]"> View Details </button>
                   </Link>

                 </div>
               </div>
             </div>



             {/* 6 ------------------ */}


             <div className="  animate__animated animate__flip animate__repeat-2 card w-96  h-[650px] shadow-xl bg-blue-700  transition duration-300 ease-in-out hover:scale-110 ">
               <figure className="px-10 pt-10">
                 <img src="https://img.freepik.com/premium-photo/four-rolls-glitter-tape-parallel-strips-white-table_142501-687.jpg?w=740" alt="Shoes" className=" rounded-2xl h-[300px] w-[300px]  " />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title  text-white">name: Tape   </h2>
                 <p className=" text-xl text-white"> Details:  Craft tape, also known as decorative tape or washi tape, is a type of adhesive tape widely used in crafting, scrapbooking, and DIY projects. Here's some .  </p>
                 <div className="card-actions">
                  <Link to="/tape"  >
                   <button className="btn btn-secondary w-[300px]"> View Details </button>
                   </Link>
                 </div>
               </div>
             </div>



            </div>
            </div>



            
        </div>
    );
};

export default CraftsItems;