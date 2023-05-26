import ExploreRecent from "./components/organisms/exploreRecent/ExploreRecent.jsx";
import HeadingPage from "./components/organisms/headingPage/HeadingPage.jsx";
import Creator from "./components/molecules/creator/Creator.jsx";
import {useFetchData} from "./hooks/UseFetchData.js";
import {API_URL} from "./helpers/fetchData.js";
import LiveAuctions from "./components/organisms/liveAuctions/LiveAuctions.jsx";
import Layout from "./components/templates/Layout";
import Loader from "./components/molecules/loader/Loader";
import ErrorPage from "./components/organisms/errorPage/ErrorPage";

function App() {
    const {data, loading} = useFetchData(`${API_URL}/nft`)

    if(loading){
        return <Loader/>
    }
    if(!data){
        return <ErrorPage/>
    }
      return (
          <>
                <Layout>
                    <HeadingPage id='home' data={data}/>
                    <Creator id='creators'/>
                    <ExploreRecent data={data} id='marketplace'/>
                    <LiveAuctions data={data}/>
                </Layout>
          </>
      )
    }

export default App
