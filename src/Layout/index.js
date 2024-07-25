import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

function Layout({ children, title }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const MenuToggle = () => {
    setShow(!show);
  };

  // Log out the user by removing cookies and local storage data
  const LogOut = () => {
    Cookies.remove("token", { path: "/" });
    Cookies.remove("agentDetails", { path: "/" });
    Cookies.remove("userDetails", { path: "/" });
    Cookies.remove("agentData", { path: "/" });
    Cookies.remove("userdata", { path: "/" });
    localStorage.removeItem("agentData");
    localStorage.removeItem("userdata");
    navigate("/");
  };
  return (
    <div>
      <div className={`dashboard_wrapper ${show ? "active" : ""} main`}>
        <div className="gridContainer dashboard_play">
          <Header />
          <Suspense fallback={""}>
            <div className={"container"}>{children}</div>
          </Suspense>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
