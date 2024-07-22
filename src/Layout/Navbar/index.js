/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ currentRoute }) => {
	const navigate = useNavigate()
	const location = useLocation()

	const Reports = ["/Dashboard", '/revenue',"/pockerrevenue",'/pointtransfer',"/mutiplayerpointtransfer","/dailystatus"]
	const DrawDetails = ['/funtarget', "/funroullet", "/triplefun", "/funab"]
	const agentmail = ['/agentmail']
	const weekreport = ['/weekreport']
	
  return (
    <nav>
      <ul className="toresponsive" id="menu4">
        <li>
          <a onClick={()=>navigate('/revenue')}  className={currentRoute === "Reports" || Reports?.includes(location?.pathname) ? "active main_a" : " main_a"}>
            Reports
          </a>
          <ul>
            <li>
              <a onClick={()=>navigate('/revenue')}>Revenue</a>
            </li>
            <li className="new-opt">
              <a onClick={()=>navigate("/pockerrevenue")}>Poker Revenue</a>
            </li>
            <li>
              <a onClick={()=>navigate('/pointtransfer')}>Point Transfer</a>
            </li>
            <li>
              <a onClick={()=>navigate("/mutiplayerpointtransfer")}>Multiplayer Point Transfer</a>
            </li>
            <li>
              <a onClick={()=>navigate("/dailystatus")}>Daily Status</a>
            </li>
          </ul>
        </li>
        <li>
          <a
           onClick={()=>navigate("/funtarget")}
            className={currentRoute === "drawDetails" ||  DrawDetails?.includes(location?.pathname)  ? "active main_a" : " main_a"}
          >
            Draw Details
          </a>
          <ul>
            <li>
              <a onClick={()=>navigate("/funtarget")}>Fun Target</a>
            </li>
            <li>
              <a onClick={()=>navigate("/funroullet")}>Fun Roullet</a>
            </li>
            <li>
              <a onClick={()=>navigate("/triplefun")}>Triple Fun</a>
            </li>
            <li>
              <a onClick={()=>navigate("/funab")}>Fun AB</a>
            </li>
          </ul>
        </li>
        <li>
          <a  onClick={()=>navigate("/agentmail")} className={currentRoute === "mailReport" || agentmail?.includes(location?.pathname) ? "active main_a" : "main_a"}>
            Mail Report
          </a>
          <ul>
            <li>
              <a onClick={()=>navigate("/agentmail")}>Agent Mail</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            onClick={()=>navigate("/weekreport")}
            className={currentRoute === "weeklyDetailesReport" || weekreport?.includes(location?.pathname) ? "active main_a" : "main_a"}
          >
            Weekly Details Reports
          </a>
          <ul></ul>
        </li>
        <li>
          <a className="main_a" onClick={()=>navigate("/")}>LogOut</a>
          <ul></ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
