import React from 'react';

const CardBalance = () => {
    return (
        <div className="card-balance block">
            <div className="block__title">Card Balance</div>
            <div className="card-balance__price">$17.30</div>
            <div className="card-balance__available-price gray">$1,482.70 Available</div>
        </div>
    );
};

export default CardBalance;