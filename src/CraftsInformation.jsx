import { Link } from "react-router-dom";



const CraftsInformation = () => {
    return (
        <div className=" mb-10">
            <div>

                          <div className="  animate__animated animate__rotateIn animate__repeat-2 container p-2 mx-auto sm:p-4 text-gray-100">

                    <div className=" flex items-center gap-2">       
                    <img className=" h-[60px]" src="https://i.ibb.co/w7n6fK4/handcraft-2.png" alt="" />
                 	<h2 className="mb-4 text-6xl text-secondary  leading-tight font-bold">Crafts Information</h2>
                    </div> 


              	<div className="overflow-x-auto">
              		<table className="min-w-full text-xs">
              			<colgroup>
              				<col />
              				<col />
              				<col />
              				<col />
              				<col />
              				<col className="w-24" />
              			</colgroup>
              			<thead className=" bg-blue-600">
              				<tr className="text-left">
              					<th className="p-3">Crafts #</th>
              					<th className="p-3">Client</th>
              					<th className="p-3">Issued</th>
              					<th className="p-3">Due</th>
              					<th className="p-3 text-right">Amount</th>
              					<th className="p-3">View Details</th>
              				</tr>
              			</thead>
              			<tbody>
              				<tr className="border-b border-opacity-20 border-gray-700 bg-black">
              					<td className="p-3">
              						<p>Card Crafts</p>
              					</td>
              					<td className="p-3">
              						<p>American Crafts company</p>
              					</td>
              					<td className="p-3">
              						<p>14 Jan 2022</p>
              						<p className="text-gray-400">Friday</p>
              					</td>
              					<td className="p-3">
              						<p>01 Feb 2022</p>
              						<p className="text-gray-400">Tuesday</p>
              					</td>
              					<td className="p-3 text-right">
              						<p>$15,792</p>
              					</td>
              					<td className="p-3 text-right">
              						<span className="px-3 py-1 font-semibold rounded-md  text-gray-900">
                                        <Link to="/card" >
              							<span className=" btn">Details</span>
                                        </Link>
              						</span>
              					</td>
              				</tr>
              				<tr className="border-b border-opacity-20 border-gray-70 bg-blue-600">
              					<td className="p-3">
              						<p>Wood Crafts</p>
              					</td>
              					<td className="p-3">
              						<p>India Crafts company</p>
              					</td>
              					<td className="p-3">
              						<p>14 Jan 2022</p>
              						<p className="text-gray-400">Friday</p>
              					</td>
              					<td className="p-3">
              						<p>01 Feb 2022</p>
              						<p className="text-gray-400">Tuesday</p>
              					</td>
              					<td className="p-3 text-right">
              						<p>$275</p>
              					</td>
              					<td className="p-3 text-right">
              						<span className="px-3 py-1 font-semibold rounded-md  text-gray-900">
                                     <Link to="/wood"  > 
              						<span className=" btn">Details</span>
                                      </Link>  

              						</span>
              					</td>
              				</tr>
              				<tr className="border-b border-opacity-20 border-gray-700 bg-black">
              					<td className="p-3">
              						<p>Bag Crafts</p>
              					</td>
              					<td className="p-3">
              						<p>Bangladesh Crafts company</p>
              					</td>
              					<td className="p-3">
              						<p>14 Jan 2022</p>
              						<p className="text-gray-400">Friday</p>
              					</td>
              					<td className="p-3">
              						<p>01 Feb 2022</p>
              						<p className="text-gray-400">Tuesday</p>
              					</td>
              					<td className="p-3 text-right">
              						<p>$8,950,500</p>
              					</td>
              					<td className="p-3 text-right">
              						<span className="px-3 py-1 font-semibold rounded-md  text-gray-900">
                                      <Link to="/bag" > 
                                      <span className=" btn">Details</span>
                                      </Link> 

              						</span>
              					</td>
              				</tr>
              				<tr className="border-b border-opacity-20 border-gray-700 bg-blue-600">
              					<td className="p-3">
              						<p>Paper Crafts</p>
              					</td>
              					<td className="p-3">
              						<p> Jhenaidah Crafts company </p>
              					</td>
              					<td className="p-3">
              						<p>14 Jan 2022</p>
              						<p className="text-gray-400">Friday</p>
              					</td>
              					<td className="p-3">
              						<p>01 Feb 2022</p>
              						<p className="text-gray-400">Tuesday</p>
              					</td>
              					<td className="p-3 text-right">
              						<p>$98,218</p>
              					</td>
              					<td className="p-3 text-right">
              						<span className="px-3 py-1 font-semibold rounded-md  text-gray-900">
                                    <Link to="/paper"  >
              						<span className=" btn">Details</span>
                                    </Link>

              						</span>
              					</td>
              				</tr>
              			</tbody>
              		</table>
              	</div>
              </div>








            </div>
            
        </div>
    );
};

export default CraftsInformation;