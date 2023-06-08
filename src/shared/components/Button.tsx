import React from 'react';
import styles from './Button.module.scss'

type ButtonProps = {
    text: string |  JSX.Element
    width?: number | undefined
    imgUrl?: string | undefined
    fontSize?: number
}

const Button = ({text, width, imgUrl, fontSize}: ButtonProps) => {
    return (
        // можно было сделать с помощью CSSinJS, а не инлайн
        <button className={styles.button} style={{width: width, marginRight: 20, fontSize: fontSize}}>
            {imgUrl
                ? <img src={imgUrl} alt="any image" style={{marginRight: 15}}/>
                : null
            }
            <span>{text}</span>
        </button>
    );
};

export default Button;