import './App.module.scss'
import Header from "./components/organisms/header/Header.jsx";
import ExploreRecent from "./components/organisms/exploreRecent/ExploreRecent.jsx";
import HeadingPage from "./components/organisms/headingPage/HeadingPage.jsx";
import Creator from "./components/molecules/creator/Creator.jsx";
import {useFetchData} from "./hooks/UseFetchData.js";
import {API_URL} from "./helpers/fetchData.js";
import LiveAuctions from "./components/organisms/liveAuctions/LiveAuctions.jsx";
import NFTCard from "./components/molecules/nftCard/NFTCard.jsx";
import NftCardLive from "./components/molecules/nftCardLive/NftCardLive.jsx";
function App() {
const {data, loading} = useFetchData(`${API_URL}/nft`)

if(loading){
    return <div>loading...</div>
}
if(!data){
    return <div>ERROR</div>
}
  return (
    <>
        {/*<Header/>*/}
        <ExploreRecent data={data}/>
        {/*<Header/>*/}
        <LiveAuctions/>
        {/*<HeadingPage/>*/}
        {/*<Creator/>*/}



    </>
  )
}

export default App
