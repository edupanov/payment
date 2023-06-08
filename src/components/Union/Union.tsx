import React from 'react';
import union from '../../assets/images/Union.png'
import styles from './Union.module.scss'

const Union = () => {
    return (
        <div className={styles.union}>
            <img src={union} alt="union"/>
        </div>
    );
};

export default Union;