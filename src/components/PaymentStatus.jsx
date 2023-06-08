import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const PaymentStatus = () => {
    return (
        <div className="payment-status block">
            <div className="block__title">No Payment Due</div>
            <div className="payment-status__text gray">You've paid your<br/> June balance.</div>

            <div className="payment-status__check">
                <FontAwesomeIcon icon="check"/>
            </div>
        </div>
    );
};

export default PaymentStatus;