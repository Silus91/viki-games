import React from 'react';

import "./Box.css";

export const Box = ({ value, onClick }) => {
    const style = value === "V" ? "V" : "H";

    return (
        <button className={`box ${value}`} onClick={onClick}></button>
    )
}