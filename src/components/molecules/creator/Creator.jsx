import styles from './Creator.module.scss'
import CreatorBox from "../../atoms/creatorBox/CreatorBox.jsx";
import {useFetchData} from "../../../hooks/UseFetchData.js";
import {API_URL} from "../../../helpers/fetchData.js";
const Creator = () => {
    const {data, loading} = useFetchData(`${API_URL}/creator`)
    const firstRow = data ? data.slice(0 , 5) : []
    const secondRow = data ? data.slice(5 , 10) : []
    const thirdRow = data ? data.slice(10 , 15) : []

    if(loading){
        return <div>loading...</div>
    }
    if(!data){
        return <div>ERROR</div>
    }
    return (
        <div className={styles.creatorWrapper}>
            <div className={styles.heading}>Popular Creators</div>
            <div className={styles.creatorBox}>
                <div className={styles.creatorLines}>
                    <li className={styles.topListItem}>{firstRow.map((creator) => (
                        <CreatorBox
                            balance={creator.balance}
                            name={creator.name}
                            key={creator.id}
                        />
                    ))}
                    </li>
                    <li className={styles.midListItem}>{secondRow.map((creator) => (
                        <CreatorBox
                            balance={creator.balance}
                            name={creator.name}
                            key={creator.id}
                        />
                    ))}
                    </li>
                    <li className={styles.botListItem}>{thirdRow.map((creator) => (
                            <CreatorBox
                                balance={creator.balance}
                                name={creator.name}
                                key={creator.id}
                            />
                    ))}
                    </li>
                </div>
            </div>
        </div>
    );
};


export default Creator;