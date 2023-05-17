import React from 'react';
import styles from "./ExploreRecent.module.scss"
import NFTCard from "../../molecules/nftCard/NFTCard.jsx";
const ExploreRecent = () => {
    return (
        <div className={styles.container}>
            <NFTCard/>
        </div>
    );
};

export default ExploreRecent;