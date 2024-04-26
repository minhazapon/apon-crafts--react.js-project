import { NavLink } from "react-router-dom";



const Navbar = () => {


    const links = <>
    
             <li><NavLink to="/" >Home</NavLink></li>
             <li><NavLink to="/crafts" >crafts Items</NavLink></li>
             <li><NavLink to="/add" >Add Craft Items</NavLink></li>
            
    </>






    return (
        <div>

                    <div>
        
                    <div className="navbar bg-base-100">
                    <div className="navbar-start">
                      <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {links}
                        </ul>
                      </div>
                      <div className=" flex items-center ">
                        <img className=" h-[50px]" src="https://i.ibb.co/S0PPMXh/handcraft-1.png" alt="" />
                      <a className="  -ml-2  btn btn-ghost text-xl text-secondary font-bold ">Apon Crafts</a>
                      </div>


                    </div>
                    <div className="navbar-center hidden lg:flex">
                      <ul className="menu menu-horizontal px-1">
                        {links}
                      </ul>
                    </div>
                    <div className="navbar-end">
                      <a className="btn bg-secondary text-white  w-[100px] ">Login</a>
                    </div>
                  </div>
                






            </div>
            
        </div>
    );
};

export default Navbar;