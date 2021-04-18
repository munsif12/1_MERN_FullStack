import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
    const history = useHistory();
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
                if (res.status !== 200) {
                    alert("cookies not cleared")
                }
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
