import { useLoaderData } from "react-router-dom";



const Items = () => {

    const items = useLoaderData();

    console.log(items)

     const { id, image, name, Details, price, Crafts_shop, Location, Owner } = items

    return (
        <div className=" mt-10 mb-10">

            <div className=" flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
             </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title"> {name} </h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div className="card-actions">
                 <button className="btn btn-primary">Buy Now</button>
               </div>
             </div>
           </div>





            </div>
            
        </div>
    );
};

export default Items;