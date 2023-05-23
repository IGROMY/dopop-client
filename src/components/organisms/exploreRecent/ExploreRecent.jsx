import React from 'react';
import styles from "./ExploreRecent.module.scss"
import NFTCard from "../../molecules/nftCard/NFTCard.jsx";
import Text from "../../atoms/text/Text.jsx";
const ExploreRecent = ({data, id}) => {
    return (
        <div id={id} className={styles.container}>
            <div>
                <Text variant="primary">Explore </Text>
                <Text variant="secondary">Recent</Text>
            </div>
            <ul className={styles.listItems}>
                {data.map((nft)=>(
                    <NFTCard key={nft.id}
                             photo={nft.photo}
                             icon={nft.icon}
                             type={nft.type}
                             name={nft.name}
                             creator={nft.creator}
                             price={nft.price}
                    />

                ))}

            </ul>
        </div>
    );
};

export default ExploreRecent;