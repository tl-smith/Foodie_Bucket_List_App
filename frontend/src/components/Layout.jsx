import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./LayoutFooter.jsx";

export default function Layout(){
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}