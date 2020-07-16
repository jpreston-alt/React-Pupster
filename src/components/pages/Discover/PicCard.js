import React from "react";

function PicCard(props) {
    return (
        <div className="card pic-card">
            <div className="img-container">
                <img src={props.url} className="card-img-top card-img" alt="Dog" />
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <button
                            className="thumb-btn"
                            style={{ backgroundColor: "red" }}
                            onClick={props.handleDownClick}
                        >
                            <i className="fas fa-thumbs-down"></i>
                        </button>
                    </div>
                    <div className="col">
                        <button
                            className="thumb-btn"
                            style={{ backgroundColor: "green" }}
                            onClick={props.handleUpClick}
                        >
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PicCard;