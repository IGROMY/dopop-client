import {useEffect, useState} from 'react'
import './App.css'
import NFTCard from "./components/molecules/nftCard/NFTCard.jsx";
import Header from "./components/organisms/header/Header.jsx";

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
        <Header/>
        <ul>
            {nftData.map((nft)=>(
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

    </>
  )
}

export default App
