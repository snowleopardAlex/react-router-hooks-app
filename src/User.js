import React from "react";
import {useParams} from "react-router-dom";


function User() {
    const {firstname, lastname} = useParams();
    return (
    <div className="ml-4">
        <p>
        User {firstname} {lastname}
        </p>
    </div>
    )
}

export default User;