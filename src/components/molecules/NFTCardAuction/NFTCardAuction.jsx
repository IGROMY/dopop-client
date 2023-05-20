import React from 'react';
import styles from './NFTCardAuction.module.scss'
import background from '../../../assets/images/Shrek-Meme-Free-PNG.png'
import InlineSVG from "react-inlinesvg";
import fire from '../../../assets/icons/img04 1fire.svg'
import blockchainIcon from '../../../assets/icons/img04 1fire.svg'
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
                <div><InlineSVG src={fire}/></div>
                <div className={styles.timerBox}>
                    <span className={styles.boxName}>Auction ends</span>
                    <span className={styles.boxInfo}>13 : 44 : 40</span>
                </div>
                <div><InlineSVG src={blockchainIcon}/></div>
                <div className={styles.currentBox}>
                    <span className={styles.boxName}>Current bid</span>
                    <span className={styles.boxInfo}>3 ETH</span>
                </div>
                <div className={styles.bidBox}>
                    bid
                </div>
            </div>
        </div>
    );
};

export default NftCardAuction;