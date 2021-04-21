import React, { useState, useEffect } from 'react'
import "./RegiteredUserAndMessage.css"
import { useHistory } from "react-router-dom";
function RegiteredUserAndMessage() {
    const history = useHistory();
    const [allRegisteredUsers, setAllRegisteredUsers] = useState([])
    async function getAllUsers() {
        try {
            const response = await fetch("/our-users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            if (response.status === (401 || 502 || 500) || !data) {
                history.push("/login")
            }
            console.log(data);
            setAllRegisteredUsers([...data])
            // console.log(data);
            console.log(typeof allRegisteredUsers);
            console.log(allRegisteredUsers[0])
        } catch (error) {
            console.log(error);
            alert("not a registered user")
        }
    }
    useEffect(() => {
        getAllUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="reg_user_and_feedback">
            <div className="reg_feeback_wrapper">
                {
                    allRegisteredUsers.map((user, index) => {
                        return (
                            <div className="user">
                                <div className="userImg">
                                    <p>
                                        {
                                            // user.name.slice(0, 1)//toget first letter of Name => myOwn
                                            //to get first letter of every word in name =>from stack overflow
                                            user.name.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')
                                        }
                                    </p>
                                </div>
                                <div className="userDetails">
                                    <p className="r_user_name">
                                        {
                                            user.name
                                        }
                                    </p>
                                    <p className="r_user_email">
                                        {
                                            user.email
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default RegiteredUserAndMessage
