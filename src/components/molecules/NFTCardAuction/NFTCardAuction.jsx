import React from 'react';
import styles from './NFTCardAuction.module.scss'
import background from '../../../assets/images/1648616913_4-kartinkof-club-p-smeshnie-kartinki-shrek-4.png'
import blockchainIcon from '../../../assets/icons/eth.svg'
import fire from '../../../assets/icons/img04 1fire.svg'
import Timer from "../../atoms/timer/Timer.jsx";
const NftCardAuction = () => {

    const containerBackground = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div style={containerBackground} className={styles.cardContainer}>
            <div className={styles.informationWrapper}>
                <div className={styles.auctionWrapper}>
                    <div className={styles.fireLogo}><img src={fire}/></div>
                    <div className={styles.timerBox}>
                        <span className={styles.boxName}>Auction ends</span>
                        <span className={styles.boxInfo}><Timer/></span>
                    </div>
                </div>
                <div className={styles.currencyWrapper}>
                    <div className={styles.currencyLogo}><img alt='' src={blockchainIcon}/></div>
                    <div className={styles.currentBox}>
                        <span className={styles.boxName}>Current bid</span>
                        <span className={styles.boxInfo}>3 ETH</span>
                    </div>
                </div>
                <button className={styles.bidBox}>
                    bid
                </button>
            </div>
        </div>
    );
};

export default NftCardAuction;