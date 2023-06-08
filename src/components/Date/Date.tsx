import React, {useEffect, useState} from 'react';
import styles from './Date.module.scss'
import {dateConverter} from "../../shared/utils/Utils";

const Date = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            let currentDate: Date = new window.Date()
            setDateTime(dateConverter(currentDate))
        }, 1000)

        return () => {
            clearInterval(interval)
        };
    }, [])

    return (
        <div className={styles.timeWrapper}>
            {dateTime} Касса #1
        </div>
    );
};

export default Date;