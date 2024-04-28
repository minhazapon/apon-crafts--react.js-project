import { useLoaderData } from "react-router-dom";




const Items = () => {

    const items = useLoaderData();

 
    

    //  const { id, image, name, Details, price, Crafts_shop, Location, Owner } = items

    return (
        <div className=" mt-10 mb-10">


             <div>

             
            <h1> name: {items.name} </h1>
          

             </div>
            
            
        </div>
    );
};

export default Items;