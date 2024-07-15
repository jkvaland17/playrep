import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";

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
      <div className={`dashboard_wrapper ${show ? "active" : ""}`}>
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

        <div className="right_side_wrapper">
          <Navbar />
          <Suspense fallback={""}>
            <div className={"right_side_layout_details"}>{children}</div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Layout;
