import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const TranscationsDetails = () => {
    return (
        <div className="transactions-details">
            <Link className="link-back" to="/">
                <FontAwesomeIcon className="chevron-left" icon="chevron-left"/>
            </Link>
            <div className="info-top">
                <div className="price">$7.50</div>
                <div className="title gray">Airalo</div>
                <div className="date gray">5/26/22, 12:47</div>
            </div>


            <div className="info-bottom block">
                <div className="item">
                    <div className="title">Status: Approved</div>
                    <div className="text gray">RBC Bank Debit Card</div>
                </div>
                <div className="total">
                    <span>Total</span>
                    <span>$7.50</span>
                </div>
            </div>
        </div>
    );
};

export default TranscationsDetails;