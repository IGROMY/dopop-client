
import InlineSVG from "react-inlinesvg";
import lightIcon from "../../../assets/icons/sun 1.svg";
import styles from "./LightScheme.module.scss";
import {useContext} from "react";
const LightScheme = ({handleClick}) => {
    // const {theme, toggleTheme} = useContext({ThemeContext})
    return (
        <div className={styles.lightScheme}>
            <button className={styles.button} onClick={handleClick}>
                <InlineSVG src={lightIcon}/>
            </button>
        </div>
    );
};

export default LightScheme;