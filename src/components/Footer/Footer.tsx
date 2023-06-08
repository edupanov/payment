import React from 'react';
import Button from "../../shared/components/Button";
import img from '../../assets/images/Vector.png'
import styles from './Footer.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

    const icon = <FontAwesomeIcon icon={faChevronLeft} />
    return (
        <div className={styles.footer}>
            <Button text={icon} fontSize={50}/>
            <Button text={'Вызов сотрудника'} imgUrl={img} width={303}/>
        </div>
    );
};

export default Footer;