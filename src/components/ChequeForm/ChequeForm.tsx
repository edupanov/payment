import React from 'react';
import TornPaper from "../TornPaper/TornPaper";
import styles from './ChequeForm.module.scss'

const ChequeForm = () => {

    const makePrice = () => {
        const price = '820,95'
        const integer = price.split(',')[0]
        const fractionalNumber = price.split(',')[1]

        return <div className={styles.price}>
            <span className={styles.integer}>{integer},</span>
            <span className={styles.fractionalNumber}>{fractionalNumber}</span>
            <span className={styles.integer}>&#8381;</span>
        </div>
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.outerOval}>
                <div className={styles.innerOval}></div>
            </div>
            <div className={styles.chequeWrapper}>
                <div className={styles.leftSide}/>
                <div className={styles.innerCheque}>

                    <div className={styles.chequeInner}>
                        <div className={styles.chequeText}>
                            <p className={styles.header}>Стоимость покупок</p>
                            {makePrice()}
                            <p className={styles.appeal}>Приложите <br/> или прокатайте карту</p>
                        </div>
                    </div>
                    <TornPaper/>
                </div>
                <div className={styles.rightSide}/>
            </div>
        </div>
    );
};

export default ChequeForm;