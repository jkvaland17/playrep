import React, { useCallback, useRef, useState } from "react";
import { Box} from "@mui/material";
import graph from "../../assets/images/login-bar-chart.png";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import RefreshIcon from "@mui/icons-material/Refresh";
import FilledButton from "../../Components/FileButton";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    captchaInput: "",
    checked: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  function generateCaptcha() {
    const chars = "0123456789";
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
      if (
        formData.captchaInput === captcha &&
        formData.checked === true &&
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
                name="userName"
                value={formData.userName}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <span className="field-validation-error">
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
          <span className="field-validation-error">
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
          <span className="field-validation-error">
            {simpleValidator.current.message(
              "captchaInput",
              formData?.captchaInput,
              "required"
            )}
          </span>
          <div className="login-row login-submit">
            <div className="login-fields">
              <input
                type="checkbox"
                name="checked"
                value={formData?.checked}
                onChange={(e) => handleChange(e)}
              />{" "}
              Remember Me
              <span style={{ float: "right" }} />
              &nbsp;
            </div>
            <FilledButton type={'submit'} value={'Login'} className={'btn loader_css login_btn'} />
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
