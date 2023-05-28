import Header from "./components/organisms/header/Header.jsx";
import ExploreRecent from "./components/organisms/exploreRecent/ExploreRecent.jsx";
import HeadingPage from "./components/organisms/headingPage/HeadingPage.jsx";
import Creator from "./components/molecules/creator/Creator.jsx";
import {useFetchData} from "./hooks/UseFetchData.js";
import {API_URL} from "./helpers/fetchData.js";
import LiveAuctions from "./components/organisms/liveAuctions/LiveAuctions.jsx";
import styles from './App.module.scss'
import {ThemeProvider} from "./providers/ThemeProviders.jsx";
import {useContext} from "react";
import {ThemeContext} from "./providers/TheneContext.js";
import cn from "classnames";
import Connect from "./components/organisms/connect/Connect.jsx";
import Footer from "./components/organisms/footer/Footer.jsx";
function App() {
const {data, loading} = useFetchData(`${API_URL}/nft`)
    const { isDark } = useContext(ThemeContext);
console.log(isDark);
    const classes = cn({
        [styles.darkLayout]: isDark===true,
        [styles.lightLayout]: isDark===false,
    })
if(loading){
    return <div>loading...</div>
}
if(!data){
    return <div>ERROR</div>
}
  return (
        <ThemeProvider>
            <div className={classes}>
                <Header/>
                <HeadingPage id='home'/>
                <Creator id='creators'/>
                <ExploreRecent data={data} id='marketplace'/>
                <LiveAuctions/>
                <Connect/>
                <Footer/>
            </div>
        </ThemeProvider>
  )
}

export default App
