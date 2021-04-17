import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Contect.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import DialpadIcon from "@material-ui/icons/Dialpad";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contect() {
  const history = useHistory();
  const [formFilds, setFormFilds] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  function getFormFieldsData(e) {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    setFormFilds({ ...formFilds, [fieldName]: fieldValue });
  }
  async function submitData(e) {
    e.preventDefault();
    const { name, email, phone, message } = formFilds;
    if (!name || !email || !phone || !message) {
      toast.error(`🦄 All fields are mandatory to be Filled`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const response = await fetch("/contect", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resultOfcontectusResponse = await response.json();
      if (response.status === (500 || 502) || !resultOfcontectusResponse) {
        toast.error(
          `🦄 ${
            resultOfcontectusResponse.message ||
            "somthing went wrong check you field"
          }`,
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
      } else {
        toast.success(
          `🦄 ${
            resultOfcontectusResponse.message ||
            "somthing went wrong check you field"
          }`,
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
      }
    }
  }
  async function setUserDataToForm() {
    const response = await fetch("/contect-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
    setFormFilds({
      ...formFilds,
      name: data.userName,
      email: data.email,
      phone: data.phone,
    });
  }
  const { name, email, phone } = formFilds;
  useEffect(() => {
    setUserDataToForm();
  }, []);
  return (
    <div className="contect">
      <div className="contect__wrapper">
        <div className="contect__wrapper__left">
          <div className="contect__wrapper__left__details">
            <div className="getInTouch__heading">
              <h1>
                Get In Touch <ArrowForwardIosIcon className="arrow" />
              </h1>
            </div>
          </div>
        </div>
        <div className="contect__wrapper_right">
          <div className="contect__wrapper_right__form__wrapper">
            <form method="POST">
              <div className="form__name form__common__contect">
                <input
                  className="form__comon_input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  value={name}
                  onChange={getFormFieldsData}
                />
                <div className="contect__Logo">
                  <PermIdentityIcon />
                </div>
              </div>
              <div className="from__email form__common__contect">
                <input
                  className="form__comon_input"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={getFormFieldsData}
                />
                <div className="contect__Logo">
                  <AlternateEmailIcon />
                </div>
              </div>

              <div className="from__phone form__common__contect">
                <input
                  className="form__comon_input"
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={getFormFieldsData}
                />
                <div className="contect__Logo">
                  <DialpadIcon />
                </div>
              </div>
              <div className="from__message ">
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Your Message ..."
                  value={formFilds.message}
                  onChange={getFormFieldsData}
                />
              </div>
              <div className="contect__sunmitButton">
                <input
                  type="submit"
                  value="Contect Us"
                  name="submit"
                  id="contect__submit"
                  onClick={submitData}
                />
                <div className="contect__submit__arrow">
                  <ArrowRightAltIcon />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contect;
