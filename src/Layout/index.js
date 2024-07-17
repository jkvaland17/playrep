import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";
import Footer from "../Layout/Footer"
import Header from "../Layout/Header"

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
        {/* <div className="left_side_wrapper ">
          <div className={"left_side_inner_sec"}></div>
          <div>
            <ListItemButton
              sx={{ padding: "5px 15px" }}
              className="list_item logout_btn"
              onClick={() => LogOut()}
            >
              <ListItemIcon style={{ minWidth: "20px" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" className="menu_label" />
            </ListItemButton>
          </div>
        </div> */}

        <div className="gridContainer dashboard_play">
			<Header/>
          <Suspense fallback={""}>
            <div className={"right_side_layout_details container2"}>{children}</div>
          </Suspense>
		  <Footer/>
        </div>
		
      </div>

    </div>
  );
}

export default Layout;
