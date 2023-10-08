import { AuthProvider } from "../Auth/auth";
import Navbar from "./NavbarComponent/Navbar";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Layout;
