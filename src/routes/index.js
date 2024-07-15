import React from "react";

const Login = React.lazy(() => import("../Pages/Login"));
const DashBoard = React.lazy(() => import("../Pages/DashBoard"));
const Agentmail = React.lazy(() => import("../Pages/Agentmail"));
const Dailystatus = React.lazy(() => import("../Pages/Dailystatus"));
const FunTarget = React.lazy(() => import("../Pages/FunTarget"));
const Funab = React.lazy(() => import("../Pages/Funab"));
const Funroullet = React.lazy(() => import("../Pages/Funroullet"));
const MutiplayerPointTransfer = React.lazy(() => import("../Pages/MutiplayerPointTransfer"));
const PockerRevenue = React.lazy(() => import("../Pages/PockerRevenue"));
const PointTransfer = React.lazy(() => import("../Pages/PointTransfer"));
const Revenue = React.lazy(() => import("../Pages/Revenue"));
const Triplefun = React.lazy(() => import("../Pages/Triplefun"));
const Weekreport = React.lazy(() => import("../Pages/Weekreport"));

export const PublicroutesArray = [{ path: "/", component: Login }];

export const PrivateroutesArray = [
  { path: "/dashboard", component: DashBoard },
  { path: "/revenue", component: Revenue },
  { path: "/pockerrevenue", component: PockerRevenue },
  { path: "/pointtransfer", component: PointTransfer },
  { path: "/mutiplayerpointtransfer", component: MutiplayerPointTransfer },
  { path: "/dailystatus", component: Dailystatus },
  { path: "/funtarget", component: FunTarget },
  { path: "/funroullet", component: Funroullet },
  { path: "/triplefun", component: Triplefun },
  { path: "/funab", component: Funab },
  { path: "/agentmail", component: Agentmail },
  { path: "/weekreport", component: Weekreport },
];

