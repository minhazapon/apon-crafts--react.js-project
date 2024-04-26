import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Search";


const Root = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Search></Search>
            <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default Root;