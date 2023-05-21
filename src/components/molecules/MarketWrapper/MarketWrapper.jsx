import React from 'react';
import styles from './MarketWrapper.module.scss'
import button from "../../atoms/button/Button.jsx";
const MarketWrapper = () => {
    const viewMarket = () => {
        console.log(1)
    }
    return (
        <div className={styles.wrapper}>
             <div className={styles.insideWrapper}>
                <div className={styles.biggestText}>Create, Buy </div>
                <div className={styles.biggestText}>& Sell NFTs</div>
                <div className={styles.smallText}>Discover the best & new digital assets</div>
                 <div className={styles.buttonBox}>
                     <button className={styles.button} onClick={viewMarket}>View market</button>
                 </div>
             </div>

        </div>
    );
};

export default MarketWrapper;