


const SData = ({items}) => {

    const { image, name, Details, price, Crafts_shop, rating, stockStatus  } = items

    return (
        <div>

            <div>


            <div className="max-w-xs p-6 rounded-md shadow-md bg-violet-800 text-gray-50">
          	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
          	<div className="mt-6 mb-2">
          		<span className="block text-xl  font-bold tracking-widest uppercase  text-white  "> Name: {name}</span>
          		
          	</div>
          	<p className="text-gray-100"> {Details} </p>
            <p className=" text-2xl">price: {price}  </p>
            <p className=" text-2xl">Shop: {Crafts_shop} </p>
          </div>









            </div>
            
        </div>
    );
};

export default SData;