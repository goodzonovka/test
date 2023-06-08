import React from 'react';
import {latestTransactions} from '../data.js';
import Transaction from "./Transaction";


const Transcations = () => {
    return (
        <div className="latest-transactions">
            <div className="title">Latest Transactions</div>
            <div className="list block">
                {latestTransactions.map(transaction => (
                    <Transaction key={transaction.id} {...transaction} />
                ))}
            </div>
        </div>
    );
};

export default Transcations;