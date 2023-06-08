import React from 'react';
import apple from "../apple.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Transaction = ({type, nameTransaction, sum, pending, description, percent, authorizedUser, date}) => {

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="item">
            <div className="img" style={{
                background: getRandomColor()
            }}>
                <img src={apple} alt=""/>
            </div>
            <div className="content">
                <div className="content__top">
                    <div className="name-transaction">{nameTransaction}</div>
                    <div className="price">
                        {type === 'payment' && '+'}
                        {sum}
                    </div>
                </div>
                <div className="content__middle gray">
                    <div className="description">
                        {pending &&
                            <span className="pending">Pending -</span>
                        }
                        {description}
                    </div>
                    {percent &&
                        <div className="percent">{percent}%</div>
                    }
                </div>
                <div className="content__footer gray">
                    {authorizedUser &&
                        <div className="authorized-user">{authorizedUser} -</div>
                    }
                    <div className="date">{date}</div>
                </div>
                <FontAwesomeIcon className="chevron-right" icon="chevron-right"/>
            </div>
            <Link className="link" to="/details"></Link>
        </div>
    );
};

export default Transaction;