import React from "react";
import "../styles/close-button.css";

export default function CloseButton({ setBio, setLyric, setSearch }) {
    const handleClick = () => {
        setBio(null);
        setLyric(null);
        setSearch(null);
    };
    return (
        <div className="close-btn" onClick={handleClick}>
            <i className="bx bx-x"></i>
        </div>
    );
}
