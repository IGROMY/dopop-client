import React from 'react';
import styles from "./NFTCard.module.scss"
import Text from "../../atoms/text/Text.jsx";
const NFTCard = ({price, name, photo, creator, type,icon}) => {
    return (
        <div className={styles.container}>
            <img className={styles.photo} alt={name} src={photo}/>
            <div>
                <Text variant="heading">{name}</Text>
                <span>{type}</span>
            </div>
            <img className={styles.icon} alt={creator} src={icon}/>
            <div>
                <div className={styles.containerCreator}>
                    <Text variant="subHeading">creator</Text>
                    <Text variant="primary">{creator}</Text>
                </div>
                <div>BSC</div>
                <div className={styles.containerPrice}>
                    <Text variant="subHeading">Price</Text>
                    <Text variant="secondary"> {price} ETH</Text>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;