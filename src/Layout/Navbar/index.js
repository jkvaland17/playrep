/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ currentRoute }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const Reports = [
    "/Dashboard",
    "/revenue",
    "/pockerrevenue",
    "/pointtransfer",
    "/mutiplayerpointtransfer",
    "/dailystatus",
  ];
  const DrawDetails = ["/funtarget", "/funroullet", "/triplefun", "/funab"];
  const agentmail = ["/agentmail"];
  const weekreport = ["/weekreport"];

  return (
    <nav>
      <ul className="toresponsive" id="menu4">
        <li>
          <a
            className={
              currentRoute === "Reports a_pointer" ||
              Reports?.includes(location?.pathname)
                ? "active main_a a_pointer"
                : " main_a a_pointer"
            }
          >
            Reports
          </a>
          <ul>
            <li>
              <a className="a_pointer" onClick={() => navigate("/revenue")}>
                Revenue
              </a>
            </li>
            <li className="a_pointer">
              <a onClick={() => navigate("/pockerrevenue")}>Poker Revenue</a>
            </li>
            <li>
              <a
                className="a_pointer"
                onClick={() => navigate("/pointtransfer")}
              >
                Point Transfer
              </a>
            </li>
            <li>
              <a
                className="a_pointer"
                onClick={() => navigate("/mutiplayerpointtransfer")}
              >
                Multiplayer Point Transfer
              </a>
            </li>
            <li>
              <a className="a_pointer" onClick={() => navigate("/dailystatus")}>
                Daily Status
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            className={
              currentRoute === "drawDetails a_pointer" ||
              DrawDetails?.includes(location?.pathname)
                ? "active main_a a_pointer"
                : " main_a a_pointer"
            }
          >
            Draw Details
          </a>
          <ul>
            <li>
              <a className="a_pointer" onClick={() => navigate("/funtarget")}>
                Fun Target
              </a>
            </li>
            <li>
              <a className="a_pointer" onClick={() => navigate("/funroullet")}>
                Fun Roullet
              </a>
            </li>
            <li>
              <a className="a_pointer" onClick={() => navigate("/triplefun")}>
                Triple Fun
              </a>
            </li>
            <li>
              <a className="a_pointer" onClick={() => navigate("/funab")}>
                Fun AB
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            className={
              currentRoute === "mailReport a_pointer" ||
              agentmail?.includes(location?.pathname)
                ? "active main_a a_pointer"
                : "main_a a_pointer"
            }
          >
            Mail Report
          </a>
          <ul>
            <li>
              <a className="a_pointer" onClick={() => navigate("/agentmail")}>
                Agent Mail
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            onClick={() => navigate("/weekreport")}
            className={
              currentRoute === "weeklyDetailesReport a_pointer" ||
              weekreport?.includes(location?.pathname)
                ? "active main_a a_pointer"
                : "main_a a_pointer"
            }
          >
            Weekly Details Reports
          </a>
          <ul></ul>
        </li>
        <li>
          <a className="main_a a_pointer" onClick={() => navigate("/")}>
            LogOut
          </a>
          <ul></ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
