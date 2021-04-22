import React, { useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import DialpadIcon from "@material-ui/icons/Dialpad";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./Register.css";
import RegisterSvg from "./RegisterSvg";
function Register() {
  const history = useHistory();
  //reducer which is use toggle the password visiblity
  /* pahly manu try keua ka 1 use reducer ka sath password le visiblity ko 
  toggle kru but woh nhi horha tha jab Cpassword ke visiblity true hote to 
  password ke visiblity false hotjate the  masla 1 useSate use krny ke waja sa arha tha 
  iselyea abmany 1 usestate or dustra useReducer sa keya done alag alag useState sa hosakty thy
  lakin UseReducer kafee din sa practice nhi keya tha isleya (password)  ko useReducer sa kar deya*/
  const reducer = (state, action) => {
    if (action.type === "cPassword") {
      return action.payload
    }
    else if (action.type === "password") {
      return action.payload
    }
    return state;
  }
  const [state, dispatch] = useReducer(reducer, false);
  const [TogglePassword, setTogglePassword] = useState(true)
  const [formFilds, setFormFilds] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cPassword: "",
  });
  function getFormFieldsData(e) {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    setFormFilds({ ...formFilds, [fieldName]: fieldValue });
  }
  async function submitData(e) {
    e.preventDefault();
    const { name, email, phone, work, password, cPassword } = formFilds;
    if (!name || !email || !phone || !work || !password || !cPassword) {
      toast.error(`😠  All fields are Mandatory to be Filled`, {
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
    json.stringify :=> [ body:json.stringify({ your js data here }) ] ya hamary javascript ko json ma convert karta ha q ka server sirf json data ko smajta h not javascript server sa bat krwany ka leya ya json ya xml use hote ha or hamjson use krrhy ha */
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cPassword,
      }),
    });
    //jo reponse hamay pas arha h usko js ma convert krrhy ha ham
    const data = await response.json();
    console.log(response.status);
    if (
      [422, 502].includes(response.status) ||
      typeof data === "undefined" ||
      !data
    ) {
      // alert(res.message);
      toast.error(
        `😢  ${data.message || "Phone Field Should Be A Number Type"}`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log("inside error");
    } else if (response.status === 200) {
      // alert(res.message); /* alert ka sath to history.push kam krrha ha mtlabb alert ka wait krta ha then net page pa jata h
      /*lakin toastify ma direct he push page pa challa jata without notify keya huay  SETIMEOUT WalA JUGAR NEaCHY LAGA H*/
      toast.success(` 🙂  ${data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // setTimeout wala jugar ha taka toastify ka notifaction ka wait kry or phr next history.push waly page pa jai
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
    // }
  }
  return (
    <div className="register">
      <div className="content__wrapper">
        <div className="content__wrapper_left">
          <div className="wrapper__left__details">
            <h1>
              Register With Us Here {"    "}
              <ArrowForwardIosIcon className="arrow" />
            </h1>
            <div className="register_Svg">
              <RegisterSvg />
            </div>
          </div>
        </div>
        <div className="content__wrapper_right">
          <div className="content__wrapper_right__form__wrapper">
            <form method="POST">
              <div className="from__wrapper_name common">
                <input
                  className="comon_input"
                  type="text"
                  autoComplete="none"
                  autoFocus="true"
                  name="name"
                  id="name"
                  placeholder="Username"
                  value={formFilds.name}
                  onChange={getFormFieldsData}
                />
                <div className="register__Logo">
                  <PermIdentityIcon />
                </div>
              </div>
              <div className="from__wrapper_email common">
                <input
                  className="comon_input"
                  type="text"
                  autoComplete="none"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formFilds.email}
                  onChange={getFormFieldsData}
                />
                <div className="register__Logo">
                  <AlternateEmailIcon />
                </div>
              </div>
              <div className="from__wrapper_phone common">
                <input
                  className="comon_input"
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={formFilds.phone}
                  onChange={getFormFieldsData}
                />
                <div className="register__Logo">
                  <DialpadIcon />
                </div>
              </div>
              <div className="from__wrapper_work common">
                <input
                  className="comon_input"
                  type="text"
                  autoComplete="none"
                  name="work"
                  id="work"
                  placeholder="Work"
                  value={formFilds.work}
                  onChange={getFormFieldsData}
                />
                <div className="register__Logo">
                  <WorkOutlineIcon />
                </div>
              </div>

              <div className="from__wrapper_password common">
                <input
                  className="comon_input"
                  type={!state ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formFilds.password}
                  onChange={getFormFieldsData}
                  autoComplete="off"
                />
                <div className="register__Logo" style={{ cursor: "pointer" }} >
                  {state ? <VisibilityIcon onClick={() => dispatch({ type: "password", payload: false })} /> : <VisibilityOffIcon onClick={() => dispatch({ type: "password", payload: true })} />}
                </div>
              </div>

              <div className="from__wrapper_cPassword common">
                <input
                  className="comon_input"
                  type={TogglePassword ? "password" : "text"}
                  name="cPassword"
                  id="cPassword"
                  placeholder="Confirm Password"
                  value={formFilds.cPassword}
                  onChange={getFormFieldsData}
                  autoComplete="off"
                />
                <div className="register__Logo" style={{ cursor: "pointer" }} >
                  {TogglePassword ? <VisibilityOffIcon onClick={() => setTogglePassword(false)} /> : <VisibilityIcon onClick={() => setTogglePassword(true)} />}
                </div>
              </div>

              <div className="form__wrapper__sunmitButton">
                <input
                  type="submit"
                  value="Register"
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
          <div className="already__registered">
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("/login");
              }}
              className="already_register_text"
            >
              Already Register
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
