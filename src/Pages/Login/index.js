import React, { useCallback, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import graph from "../../assets/images/login-bar-chart.png";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import RefreshIcon from "@mui/icons-material/Refresh";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    captchaInput: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function generateCaptcha() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 8; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  const regenerateCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (simpleValidator.current.allValid()) {
      if (formData.captchaInput !== captcha) {
      } else if (
        formData.userName === "admin" &&
        formData.password === "admin"
      ) {
        navigate("/dashboard");
      }
    } else {
      simpleValidator.current.showMessages();
      forceUpdate();
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
          <img src={logo} alt="Logo" />
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
                <div className="formData">
                  <label>User Name</label>
                  <div className="emailWrap">
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "userName",
                    formData?.userName,
                    "required"
                  )}
                </div>
                <div className="formData">
                  <label>Password</label>
                  <div className="passWrap">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {simpleValidator.current.message(
                    "password",
                    formData?.password,
                    "required"
                  )}
                </div>
                <div className="formData">
                  <label>Capcha</label>
                  <div className="emailWrap">
                    <input
                      type="text"
                      name="captchaInput"
                      value={formData.captchaInput}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="captcha_section">
                    <span className="captcha_text">{captcha}</span>
                    <RefreshIcon
                      onClick={regenerateCaptcha}
                      className="captcha_refresh"
                    />
                  </div>
                  {simpleValidator.current.message(
                    "captchaInput",
                    formData?.captchaInput,
                    "required"
                  )}
                </div>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0",
                    justifyContent: "space-between",
                  }}
                >
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
            <img src={graph} alt="Graph" />
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
