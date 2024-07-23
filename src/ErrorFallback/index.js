import React, { useEffect } from "react";
import { MoonLoader } from "react-spinners";



const ErrorFallback = ({ error }) => {
    // Handles failed lazy loading of a JS/CSS chunk.
    useEffect(() => {
        if (localStorage.getItem('counter') === "1") {
            localStorage.removeItem('counter');
            return false
        }
        localStorage.setItem('counter', "1");
        const chunkFailedMessage = /Loading chunk [\d]+ failed/;
        if (error?.message && chunkFailedMessage.test(error.message)) {
            window.location.reload()
        }
    }, [error]);


    return (<MoonLoader color="#20b7c9" />)


};


export default ErrorFallback