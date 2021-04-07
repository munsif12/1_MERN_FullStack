import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
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
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }
  return (
    <div className="login">
      <form method="POST">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          value={formFields.email}
          onChange={getFormValues}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formFields.password}
          onChange={getFormValues}
        />
        <input
          type="submit"
          value="submit"
          name="submit"
          id="submit"
          onClick={submitData}
        />
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
