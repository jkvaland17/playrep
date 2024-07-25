import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const FilledButton = ({ type = "button", className = "btn btn_gray", value = "Clear", loading, disabledLoading, loader_class, ...rest }) => {
    return (
        <button disabled={loading} {...rest} type={type} className={className}>
            {(true) ?
                <div className={loader_class ? `btn-loader ${loader_class} btn-loader-small` : "btn-loader btn-loader-login"}>
                      <CircularProgress  size={20}/>
                </div> : value}
        </button>
    );
};

export default FilledButton;
