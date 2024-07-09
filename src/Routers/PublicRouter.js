import React from 'react';
import { Navigate } from 'react-router-dom';
import {isAuthenticated} from "../utils";

const PublicRouters = ({ isAuth, children }) => {

    return children;;
}
export default PublicRouters;
