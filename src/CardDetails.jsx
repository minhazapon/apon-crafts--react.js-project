import 'animate.css';
import { Link } from 'react-router-dom';




const CardDetails = ({data}) => {

    const { id, image, name, Details, } = data

    return (
        <div>
            

             <div>


                 <div className="  animate__animated animate__flip animate__repeat-2 card w-96  h-[650px] shadow-xl bg-blue-700  transition duration-300 ease-in-out hover:scale-110 ">
                   <figure className="px-10 pt-10">
                     <img src={image} alt="Shoes" className=" rounded-2xl h-[300px] w-[300px]  " />
                   </figure>
                   <div className="card-body items-center text-center">
                     <h2 className="card-title  text-white">name: {name} </h2>
                     <p className=" text-xl text-white"> Details: {Details} </p>

                     
                     <div className="card-actions">
                      <Link to={`/crafts/${id}`}  >
                       <button className="btn btn-secondary w-[300px]"> View Details </button>
                       </Link>
                     </div>
                     


                   </div>
                 </div>

             </div>
        </div>
    );
};

export default CardDetails;