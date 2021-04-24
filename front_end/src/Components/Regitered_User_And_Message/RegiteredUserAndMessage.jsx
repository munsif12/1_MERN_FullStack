import React, { useState, useEffect } from "react";
import "./RegiteredUserAndMessage.css";
import { useHistory } from "react-router-dom";
import UsersRegisteredWithUs from "./UsersData/UsersRegisteredWithUs";
import Loader from "./Loader/Loader";
function RegiteredUserAndMessage() {
  const history = useHistory();
  const [allRegisteredUsers, setAllRegisteredUsers] = useState([]);
  const [showLoaing, setShowLoaing] = useState(false);
  async function getAllUsers() {
    try {
      const response = await fetch("/our-users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if ([401, 500, 500].includes(response.status) || !data) {
        history.push("/login");
      }
      setShowLoaing(true);
      setAllRegisteredUsers([...data]);
      // console.log(data);
    } catch (error) {
      console.log(error);
      alert("not a registered user");
    }
  }
  function removeUser(cardUserName) {
    document.getElementById("showResetButton").style.display = "block";
    setAllRegisteredUsers((preVal) => {
      // console.log(typeof preVal)
      // console.log(typeof allRegisteredUsers)
      return preVal.filter((val) => {
        return val.name !== cardUserName;
      });
    });
  }
  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return showLoaing ? (
    <UsersRegisteredWithUs
      allRegisteredUsers={allRegisteredUsers}
      removeUser={removeUser}
      getAllUsers={getAllUsers}
    />
  ) : (
    <Loader />
  );
}
export default RegiteredUserAndMessage;
