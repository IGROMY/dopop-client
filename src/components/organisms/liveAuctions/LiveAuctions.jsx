import React, {useState} from 'react';
import styles from "./LiveAuctions.module.scss"
import NFTCard from "../../molecules/nftCard/NFTCard.jsx";
import Text from "../../atoms/text/Text.jsx";
import {useFetchData} from "../../../hooks/UseFetchData.js";
import {API_URL} from "../../../helpers/fetchData.js";
import NFTCardAuctionSmall from "../../molecules/NFTCardAuctionSmall/NFTCardAuctionSmall.jsx";
import NftCardLive from "../../molecules/nftCardLive/NftCardLive.jsx";
import Button from "../../atoms/button/Button.jsx";
const LiveAuctions = () => {
    const [viewItems, setViewItems] = useState(false)
    const handleViewAllItems = () => {
        setViewItems(!viewItems)
    }
    const {data, loading} = useFetchData(`${API_URL}/nft`)
    const firstFourNFTs = data ? data.slice(0 , 4) : []
    if(loading){
        return <div>loading...</div>
    }
    if(!data){
        return <div>ERROR</div>
    }
    return (
        <div className={styles.container}>
            <div className={styles.containerHeading}>
                <div className={styles.heading}> Live auctions </div>
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
                <Button onClick={handleViewAllItems} disabled={loading} variant="viewAllItems"> 1 </Button>
                {/*<div className={styles.buttonBox}>*/}
                {/*   <button className={styles.button} onClick={handleViewAllItems}>View all items</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default LiveAuctions;