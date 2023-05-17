import React from 'react';
import InlineSVG from "react-inlinesvg";
import lightIcon from "../../../icons/sun 1.svg"
import styles from "./LightScheme.module.scss"
const LightScheme = () => {
    const switchScheme = () => {
        console.log(1)
    }
    return (
        <div className={styles.lightScheme}>
            <button className={styles.button} onClick={switchScheme}>
                <InlineSVG src={lightIcon}/>
            </button>
        </div>
    );
};

export default LightScheme;