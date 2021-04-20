import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";
import TempUserImg from "../userImages/temporaryImage.png";
import { useHistory, NavLink } from "react-router-dom";
function About() {
  const [userDbData, setSserDbData] = useState({});
  const history = useHistory();
  async function checkIfUserIsAuthenticated() {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (response.status === 401) {
        console.log("pleaes login first")
        history.push("/login");
      } else {
        data ? setSserDbData(data) : (setSserDbData({}))
      }
    } catch (error) {
      console.log(error);
      console.log("pleaes login first")
      history.push("/login");
    }
  }
  useEffect(() => {
    checkIfUserIsAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { _id: id, userName: name, email, phone, work, date } = userDbData;
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__upper">
          <div className="userImage">
            <img src={TempUserImg} alt="UserImage" srcset="" />
          </div>
          <div className="userName__word__dbNo">
            <div className="userName">
              <h1 className="userName__h1"> {name} </h1>
            </div>
            <div className="userWork">
              <h4 className="userWork__h4">{work}</h4>
            </div>
            <div className="userDateOfRegistertion">
              <h4 className="userDateOfRegistertion__h5">{date}</h4>
            </div>
          </div>
          <div className="editProfile">
            <p className="editProfile__p">EditProfile</p>
          </div>
        </div>
        <div className="about__lower">
          <div className="userHobbies__and__work">
            <div className="userSocialLinks ">
              <div className="userFacebook links__common">
                <NavLink to="http://www.facebook.com"> Facebook</NavLink>
              </div>
              <div className="userTwitter links__common">
                <NavLink to="http://www.twitter.com"> Twitter</NavLink>
              </div>
              <div className="userLinkedin links__common">
                <NavLink to="http://www.linkedin.com"> LinkedIn</NavLink>
              </div>
              <div className="userGithub links__common">
                <NavLink to="http://www.github.com"> Github</NavLink>
              </div>
              <div className="userInstagram links__common">
                <NavLink to="http://www.instagram.com"> Instagram</NavLink>
              </div>
            </div>
          </div>
          <div className="userDb__data__titles">
            <div className="user__id">
              <p className="user__id__text">Id :</p>
            </div>
            <div className="user__name">
              <p className="user__name__text">Name :</p>
            </div>
            <div className="user__email">
              <p className="user__email__text">Email :</p>
            </div>
            <div className="user__phone">
              <p className="user__phone__text">Phone :</p>
            </div>
            <div className="user__profession">
              <p className="user__profession__text">Work :</p>
            </div>
          </div>
          <div className="user__database__data">
            <div className="db__id">
              <p className="db__id__text">{id} </p>
            </div>
            <div className="db__name">
              <p className="db__name__text"> {name}</p>
            </div>
            <div className="db__email">
              <p className="db__email__text"> {email} </p>
            </div>
            <div className="db__phone">
              <p className="db__phone__text">{phone}</p>
            </div>
            <div className="db__profession">
              <p className="db__profession__text">{work}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
