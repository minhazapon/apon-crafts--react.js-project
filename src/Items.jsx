import { useLoaderData } from "react-router-dom";




const Items = () => {

    const items = useLoaderData();

    console.log(items)
    

     const { id, image, name, Details, price, Crafts_shop, Location, Owner } = items

    return (
        <div className=" mt-10 mb-10">

            <p> {Details} </p>
            
            
        </div>
    );
};

export default Items;