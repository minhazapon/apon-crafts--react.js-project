import { useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";

const CraftsItems = () => {

    const data = useLoaderData();

    console.log(data);


    return (
        <div className=" mb-10">

            <div>
              <h1 className=" text-7xl text-secondary font-bold text-center">Crafts Items</h1>
              <p className=" text-center text-2xl text-blue-600">“Creativity is a wild mind and a disciplined eye.”</p>

            </div>


            <div className=" flex justify-center items-center">

            <div className=" mt-10 grid  md:grid-cols-3 gap-10 hover:">

                {
                    data.map( data => <CardDetails key={data.id} data={data} ></CardDetails> )
                }


            </div>
            </div>
            
        </div>
    );
};

export default CraftsItems;