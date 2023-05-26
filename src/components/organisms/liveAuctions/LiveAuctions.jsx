import React, {useState} from 'react';
import styles from "./LiveAuctions.module.scss"
import Text from "../../atoms/text/Text.jsx";
import NftCardLive from "../../molecules/nftCardLive/NftCardLive.jsx";
import Button from "../../atoms/button/Button.jsx";

const LiveAuctions = ({data}) => {
    const [viewItems, setViewItems] = useState(false)
    const firstFourNFTs = data ? data.slice(0 , 4) : []

    const handleViewAllItems = () => {
        setViewItems(!viewItems)
    }

    return (
        <div className={styles.container}>
            <div>
                <Text variant="primary">Live </Text>
                <Text variant="secondary">auctions</Text>
            </div>
            <div className={styles.fourCardsLive}>
                <ul>
                    { !viewItems ? firstFourNFTs.map((nft) => (
                        <NftCardLive
                            key={nft.id}
                            logo={nft.photo}
                            price={nft.price}/>
                    ))
                    :
                        data.map((nft) => (
                            <NftCardLive
                                key={nft.id}
                                logo={nft.photo}
                                price={nft.price}/>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.containerButton}>
                <Button onClick={handleViewAllItems} variant="viewAllItems">
                    {!viewItems ? 'View All Items:' : 'Hide Items'}
                </Button>
            </div>
        </div>
    );
};

export default LiveAuctions;