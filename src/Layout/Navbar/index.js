import React from "react";

const Navbar = ({ currentRoute }) => {
  return (
    <nav>
      <ul className="toresponsive" id="menu4">
        <li>
          <a href="#" className={currentRoute === "Reports" ? "active" : ""}>
            Reports
          </a>
          <ul>
            <li>
              <a href="/revenue">Revenue</a>
            </li>
            <li className="new-opt">
              <a href="/pockerrevenue">Poker Revenue</a>
            </li>
            <li>
              <a href="/pointtransfer">Point Transfer</a>
            </li>
            <li>
              <a href="/mutiplayerpointtransfer">Multiplayer Point Transfer</a>
            </li>
            <li>
              <a href="/dailystatus">Daily Status</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            className={currentRoute === "drawDetails" ? "active" : ""}
          >
            Draw Details
          </a>
          <ul>
            <li>
              <a href="/funtarget">Fun Target</a>
            </li>
            <li>
              <a href="/funroullet">Fun Roullet</a>
            </li>
            <li>
              <a href="/triplefun">Triple Fun</a>
            </li>
            <li>
              <a href="/funab">Fun AB</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className={currentRoute === "mailReport" ? "active" : ""}>
            Mail Report
          </a>
          <ul>
            <li>
              <a href="/agentmail">Agent Mail</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="/weekreport"
            className={currentRoute === "weeklyDetailesReport" ? "active" : ""}
          >
            Weekly Details Reports
          </a>
          <ul></ul>
        </li>
        <li>
          <a href="/">LogOut</a>
          <ul></ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
