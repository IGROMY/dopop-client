import React, {useEffect, useState} from 'react';
import styles from './NFTCardAuctionSmall.module.scss'
import background from '../../../assets/images/Shrek-Meme-Free-PNG.png'
import InlineSVG from "react-inlinesvg";
import blockchainIcon from '../../../assets/icons/eth.svg'
import fire from '../../../assets/icons/img04 1fire.svg'
import Timer from "../../atoms/timer/Timer.jsx";
const NFTCardAuctionSmall = ({logo, price}) => {


    const containerBackground = {
        backgroundImage: `url(${logo||background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div style={containerBackground} className={styles.cardContainer}>
            <div className={styles.informationWrapper}>
                <div className={styles.fireLogo}><img src={fire}/></div>
                <div className={styles.timerBox}>
                    <span className={styles.boxName}>Auction ends</span>
                    <span className={styles.boxInfo}><Timer/></span>
                </div>
                <div><img src={blockchainIcon}/></div>
                <div className={styles.currentBox}>
                    <span className={styles.boxName}>Current bid</span>
                    <span className={styles.boxInfo}>{price} ETH</span>
                </div>
                <button className={styles.bidBox}>
                    bid
                </button>
            </div>
        </div>
    );
};

export default NFTCardAuctionSmall;