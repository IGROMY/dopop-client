import styles from './HeadingPage.module.scss'
import MarketWrapper from "../../molecules/MarketWrapper/MarketWrapper.jsx";
import NFTCardAuction from "../../molecules/NFTCardAuction/NFTCardAuction.jsx";
import NFTCardAuctionSmall from "../../molecules/NFTCardAuctionSmall/NFTCardAuctionSmall.jsx";
import {useFetchData} from "../../../hooks/UseFetchData.js";
import {API_URL} from "../../../helpers/fetchData.js";
const HeadingPage = ({id}) => {
    const {data, loading} = useFetchData(`${API_URL}/nft`)
    const firstFourNFTs = data ? data.slice(0 , 4) : []

    if(loading){
        return <div>loading...</div>
    }
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