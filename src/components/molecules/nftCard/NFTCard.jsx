import React from 'react';
import styles from "./NFTCard.module.scss"
import Text from "../../atoms/text/Text.jsx";
import InlineSVG from "react-inlinesvg";
import icon from "../../../assets/images/mrNobody.svg"
const NFTCard = ({price, name, photo, creator, type}) => {
    return (
        <div className={styles.container}>
            <img className={styles.photo} alt={name} src={photo}/>
            <div className={styles.headingContainer}>
                <Text variant="heading">{name}</Text>
                <div className={styles.type}><Text variant="subHeading">{type}</Text></div>
            </div>
            <div className={styles.itemsWrapper}>
                <div className={styles.creatorBox}>
                    <div className={styles.iconContainer}>
                        <InlineSVG className={styles.icon} alt={creator} src={icon}/>
                    </div>
                    <div className={styles.creatorContainer}>
                        <Text variant="subHeading">creator</Text>
                        <Text variant="primary">{creator}</Text>
                    </div>
                </div>
                <div className={styles.priceBox}>
                    <Text variant="subHeading">Price</Text>
                    <Text variant="secondary"> {price} ETH</Text>
                </div>
            </div>



        </div>

    );
};

export default NFTCard;