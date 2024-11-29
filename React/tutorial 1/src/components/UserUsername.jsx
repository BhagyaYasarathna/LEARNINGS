import React from "react";
import "./styles.css";

export function UserUsername(props) {
    return (
        <React.Fragment>
            <b className="username">Username: </b>
            <span
                style={{
                    fontSize: "32px",
                    color: "red",
                }}
            >
                {props.username}
            </span>
        </React.Fragment>
    );
}
