import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import logo from "../../assets/images/logo.png";
import { userDetails } from "../../utils";
import { isAuthenticated } from "../../utils";

const Index = () => {
  const [userDate, setUserDate] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    setUserDate(userDetails());
  }, [isAuthenticated()]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {isAuthenticated() && (
          <>
            <div class="user-details" style={{ cursor: "pointer" }}>
              <span>Welcome</span>
              <strong id="logout">
                &nbsp;
                <em onClick={handleClick}>{userDate?.first_name}</em>
                &nbsp;
              </strong>
            </div>
            <Navbar />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
