import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/footer/Footer";

export default function Layout(){
    return (
         <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
         </>
    );
}