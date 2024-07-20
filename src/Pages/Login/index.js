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
    // <div className="login">
    //   <Box

    //   >
    //     <div>
    //       <Box
    //         className="login_div"
    //         sx={{
    //         //   display: "flex",
    //         //   flexDirection: "column",
    //         //   alignItems: "center",
    //         //   justifyContent: "center",
    //           width: "300px",
    //         }}
    //       >
    // 		  {/* <Typography variant="h6" gutterBottom className="login_heading">
    //             Login
    //           </Typography> */}
    // 		  <div className="login-row login-row-width"><h2 className=""> Login</h2>
    // 		  </div>

    //         <div>

    //           <form onSubmit={handleSubmit}>
    //             <div className="formData">
    // 				<div className="user">  <label>User Name</label></div>

    //               <div className="emailWrap">
    //                 <input
    //                   type="text"
    //                   name="userName"
    //                   value={formData.userName}
    //                   onChange={(e) => handleChange(e)}
    //                 />
    //               </div>
    //               {simpleValidator.current.message(
    //                 "userName",
    //                 formData?.userName,
    //                 "required"
    //               )}
    //             </div>
    //             <div className="formData">
    //               <label>Password</label>
    //               <div className="passWrap">
    //                 <input
    //                   type={showPassword ? "text" : "password"}
    //                   name="password"
    //                   value={formData.password}
    //                   onChange={(e) => handleChange(e)}
    //                 />
    //               </div>
    //               {simpleValidator.current.message(
    //                 "password",
    //                 formData?.password,
    //                 "required"
    //               )}
    //             </div>
    //             <div className="formData">
    //               <label>Capcha</label>
    //               <div className="emailWrap">
    //                 <input
    //                   type="text"
    //                   name="captchaInput"
    //                   value={formData.captchaInput}
    //                   onChange={(e) => handleChange(e)}
    //                 />
    //               </div>
    //               <div className="captcha_section">
    //                 <span className="captcha_text">{captcha}</span>
    //                 <RefreshIcon
    //                   onClick={regenerateCaptcha}
    //                   className="captcha_refresh"
    //                 />
    //               </div>
    //               {simpleValidator.current.message(
    //                 "captchaInput",
    //                 formData?.captchaInput,
    //                 "required"
    //               )}
    //             </div>
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 alignItems: "center",
    //                 margin: "10px 0",
    //                 justifyContent: "space-between",
    //               }}
    //             >
    //               <Button
    //                 type="submit"
    //                 variant="contained"
    //                 sx={{ margin: "10px 0" }}
    //               >
    //                 Login
    //               </Button>
    //             </Box>
    //           </form>
    //         </div>
    //       </Box>
    //       <Box className="bar-chart">
    //         <img src={graph} alt="Graph" />
    //       </Box>
    //     </div>
    //   </Box>
    // </div>
    <>
      <div className="login-div">
        <div className="login-row login-row-width">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-row fields">
            <div className="login-label">
              <i className="fa fa-user" aria-hidden="true" />
            </div>
            <div className="login-fields">
              <input
                autoComplete="off"
                data-val="true"
                data-val-regex="Please Provide Valid Login ID"
                data-val-regex-pattern="^GK[0-9]{8}$"
                data-val-required="Please Provide Login ID"
                id="username"
                maxLength={10}
                placeholder="User Name :"
                type="text"
                style={{ textTransform: "uppercase" }}
				name="userName"
				value={formData.userName}
				onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <span id="errtext" className="field-validation-error">
            {simpleValidator.current.message(
              "userName",
              formData?.userName,
              "required"
            )}
          </span>

          <div className="login-row fields">
            <div className="login-label">
              <i className="fa fa-lock" aria-hidden="true" />
            </div>
            <div className="login-fields">
              <input
                autoComplete="off"
                data-val="true"
                data-val-required="Please Provide Password"
                id="password"
                oncopy="return false"
                ondrag="return false"
                ondrop="return false"
                onpaste="return false"
                oncontextmenu="return false;"
                placeholder="Password :"
				type={showPassword ? "text" : "password"}
				name="password"
				value={formData.password}
				onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <span id="errtext" className="field-validation-error">
            {simpleValidator.current.message(
              "password",
              formData?.password,
              "required"
            )}
          </span>

          <div className="login-row fields">
            <div className="login-label">
              <i className="fa fa-lock" aria-hidden="true" />
            </div>
            <div className="login-fields">
              <input
                autoComplete="off"
                className="captchaText"
                data-val="true"
                data-val-required="Please Provide Captcha Text from Image"
                id="txtCaptcha"
                oncopy="return false"
                ondrag="return false"
                ondrop="return false"
                onpaste="return false"
                oncontextmenu="return false;"
                placeholder="Enter Image Text -> "
                type="text"
				name="captchaInput"
				value={formData.captchaInput}
				onChange={(e) => handleChange(e)}
              />
              <span className="captcha_text">{captcha}</span>
            </div>
          </div>

          <span id="errtext" className="field-validation-error">
            {" "}
            {simpleValidator.current.message(
              "captchaInput",
              formData?.captchaInput,
              "required"
            )}{" "}
          </span>
          <div className="login-row login-submit">
            <div className="login-fields">
              <input type="checkbox" /> Remember Me
              <span style={{ float: "right" }} />
              &nbsp;
            </div>
            <button
              type="submit"
              name="btnCheckLogin"
              id="btnCheckLogin"
              defaultValue="Login"
              className="login_btn"
            >
              login
            </button>
          </div>
        </form>
      </div>
      <Box className="bar-chart">
        <img src={graph} alt="Graph" />
      </Box>
    </>
  );
};

export default Login;
