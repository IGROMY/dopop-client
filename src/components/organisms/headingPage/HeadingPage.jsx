import styles from './HeadingPage.module.scss'
import MarketWrapper from "../../molecules/MarketWrapper/MarketWrapper.jsx";
import NFTCardAuction from "../../molecules/NFTCardAuction/NFTCardAuction.jsx";
import NFTCardAuctionSmall from "../../molecules/NFTCardAuctionSmall/NFTCardAuctionSmall.jsx";

const HeadingPage = ({id, data}) => {
    const firstFourNFTs = data ? data.slice(0 , 4) : []

    if(!data){
        return <div>ERROR</div>
    }
    return (
        <div className={styles.wrapper} id={id}>
            <NFTCardAuction/>
            <MarketWrapper/>
            <div className={styles.fourCardsWrapper}>
                <ul>
                 {firstFourNFTs.map((nft) => (
                    <NFTCardAuctionSmall
                        key={nft.id}
                        logo={nft.photo}
                        price={nft.price}/>
                 ))}
                </ul>
            </div>

        </div>
    );
};

export default HeadingPage;