import React from "react";

const Login = React.lazy(() => import("../Pages/Login"));
const DashBoard = React.lazy(() => import("../Pages/DashBoard"));

export const PublicroutesArray = [{ path: "/", component: Login }];

export const PrivateroutesArray = [
  { path: "/dashboard", component: DashBoard },
];

