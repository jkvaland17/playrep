import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  TextField,
} from "@mui/material";
import logo from "../../assets/images/logo.png";
import graph from "../../assets/images/login-bar-chart.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ userName: "", password: "" });
console.log("formData",formData);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData?.userName === "admin" && formData?.password === "admin") {
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div className="login-background">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          <img src={logo} />
        </Typography>

        <div className="container">
          <Box
            className="login_div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "300px",
              padding: "20px",
            }}
          >
            <div>
              <Typography variant="h5" gutterBottom className="login_heading">
                Login
              </Typography>

              <form onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ margin: "10px 0" }}>
                  <InputLabel htmlFor="username">User Name</InputLabel>
                  <OutlinedInput
                    id="username"
                    name="userName"
                    value={formData?.userName}
                    onChange={(e) => handleChange(e)}
                    label="User Name"
                  />
                </FormControl>

                <FormControl fullWidth sx={{ margin: "10px 0" }}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type="password"
                    name="password"
                    value={formData?.password}
                    onChange={(e) => handleChange(e)}
                    label="Password"
                  />
                </FormControl>

                {/* <FormControl fullWidth sx={{ margin: "10px 0" }}>
                  <InputLabel htmlFor="image-text">Enter Image Text</InputLabel>
                  <TextField
                    id="image-text"
                    value={imageText}
                    onChange={handleImageTextChange}
                    label="Enter Image Text"
                  />
                </FormControl> */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0",
                    justifyContent: "space-between",
                  }}
                >
                  {/* <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography variant="body2">Remember Me</Typography> */}
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ margin: "10px 0" }}
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </div>
          </Box>
          <Box className="bar-chart">
            <img src={graph} />
          </Box>
        </div>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ marginTop: "20px" }}>
          All rights reserved. © Copyright 2024.
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
