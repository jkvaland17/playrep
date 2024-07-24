import React from 'react';
import { MoonLoader } from "react-spinners";

const FilledButton = ({ type = "button", className = "btn btn_gray", value = "Clear", loading, disabledLoading, loader_class, ...rest }) => {
    return (
        <button disabled={loading} {...rest} type={type} className={className}>
            {(loading && !disabledLoading) ?
                <div className={loader_class ? `btn-loader ${loader_class} btn-loader-small` : "btn-loader btn-loader-small"}>
                    <MoonLoader size={20} color="#fff"/>
                </div> : value}
        </button>
    );
};

export default FilledButton;