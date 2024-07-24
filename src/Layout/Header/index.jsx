import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar";
import logo from "../../assets/images/logo.png";
import { userDetails } from '../../utils'
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Cookies from 'js-cookie';
import { isAuthenticated } from '../../utils';

const Index = () => {
  const [userDate , setUserDate] = useState()
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(()=>{
    setUserDate(userDetails())
  },[isAuthenticated])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogOut = () => {
    Cookies.remove('token', { path: '/' });
    Cookies.remove('agentDetails', { path: '/' });
    Cookies.remove('userDetails', { path: '/' });
    Cookies.remove('agentData', { path: '/' });
    Cookies.remove('userdata', { path: '/' });
    localStorage.removeItem('agentData');
    localStorage.removeItem('userdata');
    // navigate('/');
};

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div className="header">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
         {isAuthenticated() &&  <>
          <div class="user-details" style={{cursor:"pointer"}}>
              <span>Welcome</span>
              <strong id="logout">
              &nbsp;
                <em  onClick={handleClick}>{userDate?.first_name}</em>
                &nbsp;
              </strong>
            </div>
            <Navbar />
          </>}
          </div>
          {/* <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 1, cursor:"pointer"}}>LogOut</Typography>
      </Popover> */}
        </div>
    );
}

export default Index;
