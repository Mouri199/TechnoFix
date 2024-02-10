import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";


const MainBody = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainBody;