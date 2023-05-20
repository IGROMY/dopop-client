import {useEffect, useState} from 'react'
import './App.module.scss'
import NFTCard from "./components/molecules/nftCard/NFTCard.jsx";
import Header from "./components/organisms/header/Header.jsx";
import ExploreRecent from "./components/organisms/exploreRecent/ExploreRecent.jsx";
import NFTCardAuction from "./components/molecules/NFTCardAuction/NFTCardAuction.jsx";
import MarketWrapper from "./components/molecules/MarketWrapper/MarketWrapper.jsx";

function App() {

const [nftData, setNftData] = useState(null)
const [loading, setLoading] = useState(true);
const fetchData = () =>{
    return new Promise((resolve, reject)=>{
        fetch("https://dopop-server.onrender.com/nft")
            .then(response =>response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}
    useEffect(()=>{
        fetchData()
            .then(data => {
                setNftData(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    },[])
    console.log(nftData);
if(loading){
    return <div>loading...</div>
}
if(!nftData){
    return <div>ERROR</div>
}
  return (
    <>
        {/*<Header/>*/}
        {/*<ExploreRecent data={nftData}/>*/}
        <NFTCardAuction/>
        {/*<MarketWrapper/>*/}
    </>
  )
}

export default App
