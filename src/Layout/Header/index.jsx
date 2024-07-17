import React from 'react';
import Navbar from "../Navbar";
import logo from "../../assets/images/logo.png";

const Index = () => {
    return (
        <div>
            <div className="header">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div class="user-details">
              <span>Welcome</span>
              <strong id="logout">
                <em>Makwana 6 Indore MP</em>
                &nbsp;
              </strong>
            </div>
            <Navbar />
          </div>
        </div>
    );
}

export default Index;
