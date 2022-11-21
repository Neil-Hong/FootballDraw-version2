import React from "react";
import "./entrance.styles.scss";

const Button = () => {
    return (
        <>
            <button className="drawButton">
                <a className="btn" href="/entrance">
                    开始
                    <br />
                    Start
                </a>
            </button>
        </>
    );
};

export default Button;
