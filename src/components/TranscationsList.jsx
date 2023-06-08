import React from 'react';
import CardBalance from "./CardBalance";
import DailyPoints from "./DailyPoints";
import PaymentStatus from "./PaymentStatus";
import Transcations from "./Transcations";

const TranscationsList = () => {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <CardBalance/>
                    <DailyPoints/>
                </div>
                <PaymentStatus/>
            </div>
            <Transcations/>
        </>
    );
};

export default TranscationsList;