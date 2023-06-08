import React from 'react';
import styles from './Cheque.module.scss'
import Date from "../Date/Date";
import ChequeForm from "../ChequeForm/ChequeForm";
import Union from "../Union/Union";

const Cheque = () => {

    return (
        <div className={styles.contentWrapper}>
            <Date/>
            <ChequeForm/>
            <Union/>
        </div>
    );
};

export default Cheque;