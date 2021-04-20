import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginSvg from "./LoginSvg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { loginLogoutContext } from "../../App"
import "./Login.css";
function Login() {
  const { dispatch } = useContext(loginLogoutContext)
  const history = useHistory();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  function getFormValues(e) {
    const fieldName = e.target.name;
    const filedValue = e.target.value;
    setFormFields({
      ...formFields,
      [fieldName]: filedValue,
    });
  }
  async function submitData(e) {
    e.preventDefault();
    const { email, password } = formFields;
    if (!email || !password) {
      //join be field empty na ho
      toast.error(`🦄 All fields are mandatory to be Filled`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    /*fetch method ka zareya ham apna data /login page joka port 8000 pa run horha h waha send krrhy ha jasa ka ham pahly POSTMAN ma ka through krrhy thy*/
    /*jasy postMan ma ham phly method then header then body choose krty thy isetrah fetch ka 2nd param ka object ma b ham wohe kam krrhy h
    method :=> ham bata ha ka ham kya krna chahrhy ha like data save ya delete ya update etc (put,patch,post,delete)
    headers :=> hamy document ka type batay ha like (content-type:Text/plain)(content-type:applicaton/json
    body :=> isma hamara data hota ha joham frontend sa backend pa send krrhy hoty h 
    json.stringify :=> [ body:json.stringify({ your js data here }) ] ya hamary javascript ko json ma convert karta ha q ka server sirf json data ko smajta h not javascript server sa bat krwany ka leya ya json ya xml use hote ha or hamjson use krrhy ha */ const response = await fetch(
      "/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    //jo reponse hamay pas arha h usko js ma convert krrhy ha ham
    const data = await response.json();
    if (response.status === (502 || 422) || typeof data === "undefined") {
      toast.error(`🦄 ${data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (response.status === 200) {
      // alert(data.message); //alert ka sath to history.push kam krrha ha mtlabb alert ka wait krta ha then net page pa
      // jata h lakin toastify ma direct he push page pa challa jata without notify keya huay
      await toast.success(` ${data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({ type: "login", payload: true })
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }
  return (
    <div className="login">
      <div className="login__content__wrapper">
        <div className="login__content__wrapper_left">
          <div className="login__wrapper__left__details">
            <h1>
              Login Here {"    "}
              <ArrowForwardIosIcon className="arrow" />
            </h1>
            <div className="login_Svg">
              <LoginSvg />
            </div>
          </div>
        </div>
        <div className="login__content__wrapper_right">
          <div className="login__content__wrapper_right__form__wrapper">
            <form method="POST">
              <div className="login__from__wrapper_email loginCommon">
                <input
                  className="loginComon_input"
                  type="text"
                  autoFocus="true"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formFields.email}
                  onChange={getFormValues}
                />
                <div className="input__Logo">
                  <AlternateEmailIcon />
                </div>
              </div>

              <div className="login__from__wrapper_password loginCommon">
                <input
                  className="loginComon_input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formFields.password}
                  onChange={getFormValues}
                />
                <div className="input__Logo">
                  <VisibilityOffIcon />
                </div>
              </div>

              <div className="from__wrapper_submitBtn loginCommon">
                <input
                  type="submit"
                  value="Login"
                  name="submit"
                  id="submit"
                  onClick={submitData}
                />
                <div className="submit__arrow">
                  <ArrowRightAltIcon />
                </div>
              </div>
            </form>
          </div>
          <div className="login__registered">
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("/register");
              }}
              className="login__register_text"
            >
              Not Registered ?
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
