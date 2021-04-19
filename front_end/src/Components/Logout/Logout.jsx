import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { loginLogoutContext } from "../../App"
function Logout() {
    const history = useHistory();
    const { dispatch } = useContext(loginLogoutContext)
    React.useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
            .then(res => {
                history.push("/login", { replace: true })
                dispatch({ type: "logout", payload: false })
            })
            .catch((error) => console.log(error));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <h1>user Loged oout</h1>
        </>
    );
}

export default Logout;
