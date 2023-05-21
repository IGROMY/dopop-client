import Header from "./components/organisms/header/Header.jsx";
import ExploreRecent from "./components/organisms/exploreRecent/ExploreRecent.jsx";
import HeadingPage from "./components/organisms/headingPage/HeadingPage.jsx";
import Creator from "./components/molecules/creator/Creator.jsx";
import {useFetchData} from "./hooks/UseFetchData.js";
import {API_URL} from "./helpers/fetchData.js";
import styles from './App.module.scss'
import Layout from "./components/templates/Layout.jsx";
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
        <div className={styles.layout}>
             <Header/>
             <HeadingPage/>
             <Creator/>
             <ExploreRecent data={data}/>
        </div>
    </>
  )
}

export default App
