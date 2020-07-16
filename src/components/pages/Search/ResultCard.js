import React from "react";
import "./styles.css";

function ResultCard(props) {
    return (
        <div className="card result-card">
            <img src={props.url} className="card-img-top" alt="placeholder-img" />
        </div>
    );
};

export default ResultCard;