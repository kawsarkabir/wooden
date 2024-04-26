import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/footer/Footer";
import TopBar from "../components/Navbar/TopBar";

export default function Layout() {
  return (
    <>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
