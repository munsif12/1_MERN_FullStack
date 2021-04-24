import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
function UsersRegisteredWithUs({
  allRegisteredUsers,
  removeUser,
  getAllUsers,
}) {
  return (
    <div className="reg_user_and_feedback">
      <div className="reg_feeback_wrapper">
        {allRegisteredUsers.map((user, index) => {
          // if (user.messages[0] === undefined) {
          //   console.log("++");
          // } else {
          //   console.log(user.messages[0].message);
          // }
          //   console.log(user.messages[0]);
          //   console.log(user.messages);
          return (
            <div className="user" key={index}>
              <div className="userImg">
                <p>
                  {
                    // user.name.slice(0, 1)//toget first letter of Name => myOwn
                    //to get first letter of every word in name =>from stack overflow
                    user.name
                      .split(/\s/)
                      .reduce(
                        (response, word) => (response += word.slice(0, 1)),
                        ""
                      )

                    // 2 another method for the same task split returns us array and then apply map on array to getFirst letter
                    // user.name.split(' ').map(i => i.charAt(0)).toLowerCase()

                    // 3 phly string lo or jaha space i ge uder sa split krka array banow or ['munsif','ali','misri'] or phr is array pr map method laga ka hard word ka phla letter ko destry letter ka sath join krdo
                    // user.name.split(' ').map(item => item[0]).join(' ')
                  }
                </p>
              </div>
              <div className="userDetails">
                <p className="r_user_name">{user.name}</p>
                <p className="r_user_email">{user.email}</p>
              </div>
              <div
                className="removeUser"
                onClick={() => {
                  removeUser(user.name);
                }}
              >
                <HighlightOffIcon style={{ color: "green" }} />
              </div>
              <div className=" removerUserNo">
                <p>{++index}</p>
              </div>
              <div className="userContectMessage">
                <h5>{`${user.name}'s Message :`}</h5>
                <p className="message">
                  {user.messages[0] === undefined
                    ? "There is not message available for this user"
                    : user.messages[0].message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="reset" id="showResetButton">
        <button onClick={getAllUsers}>RESET</button>
      </div>
    </div>
  );
}

export default UsersRegisteredWithUs;
