
import InlineSVG from "react-inlinesvg";
import lightIcon from "../../../assets/icons/sun 1.svg";
import styles from "./LightScheme.module.scss";
import {useContext} from "react";
import Button from "../button/Button.jsx";
const LightScheme = ({handleClick}) => {
    // const {theme, toggleTheme} = useContext({ThemeContext})
    return (
        <div className={styles.lightScheme}>
            <Button className={styles.button} onClick={handleClick}>
                <InlineSVG src={lightIcon}/>
            </Button>

        </div>
    );
};

export default LightScheme;