import React from 'react';
import styles from "./NftCardLive.module.scss"
import InlineSVG from "react-inlinesvg";
import Text from "../../atoms/text/Text.jsx";
import icon from "../../../assets/images/mrNobody.svg";
import Timer from "../../atoms/timer/Timer.jsx";
const NftCardLive = ({price, name, logo, creator}) => {

    return (
        <div className={styles.cardContainer}>
            <img className={styles.photo} alt={name} src={logo}/>

            <div className={styles.itemsWrapper}>
                <div className={styles.creatorBox}>
                    <div className={styles.iconContainer}>
                        <InlineSVG className={styles.icon} alt={creator} src={icon}/>
                    </div>
                    <div className={styles.creatorContainer}>
                        <Text variant="subHeading">By mrNobody</Text>
                        <Text variant="primary">{creator}</Text>
                    </div>
                </div>
                <div className={styles.timerBox}>
                    <span className={styles.boxName}>Ends In</span>
                    <span className={styles.boxTimer}><Timer/></span>
                </div>
            </div>
            <div className={styles.headingContainer}>

                <div className={styles.priceBox}>
                    <Text variant="subHeading">Price</Text>
                    <Text variant="secondary"> {price} ETH</Text>
                </div>

                <button className={styles.bidButton}>
                    Place your Bid
                </button>

            </div>

        </div>

    );
};

export default NftCardLive;