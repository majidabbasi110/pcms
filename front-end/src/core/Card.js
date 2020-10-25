import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";



const Card = ({ complaint }) => {
    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="card-header">{complaint.name}</div>
                <div className="card-body">
                    <ShowImage item={complaint} url="complain" />
                </div>
            </div>
        </div>
    );
};

export default Card;
