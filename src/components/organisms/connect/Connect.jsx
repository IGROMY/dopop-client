import React from 'react';
import styles from "./Connect.module.scss"
import ellipseLeft from "../../../assets/images/EllipseLeft.png"
import ellipseRight from "../../../assets/images/EllipseRight.png"
import Button from "../../atoms/button/Button.jsx";
const Connect = () => {

    return (
        <div className={styles.connectWrapper}>

            <div className={styles.ellipseLeft}><img alt={"Ellipse"} src={ellipseLeft}/></div>
            <div className={styles.containerConnect}>
                <div className={styles.firstRow}> Pull market data from</div>
                <div className={styles.secondRow}> our digital asset API</div>
                <div className={styles.containerButton}>
                    <button className={styles.button}> Connect wallet </button>
                </div>
            </div>
            <div className={styles.ellipseRight}><img src={ellipseRight}/></div>
        </div>
    );
};

export default Connect;