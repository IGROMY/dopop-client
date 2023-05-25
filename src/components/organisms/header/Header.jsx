
import styles from './Header.module.scss'
import Logo from "../../atoms/logo/Logo.jsx";
import HeaderText from "../../atoms/headerText/HeaderText.jsx";
import Search from "../../atoms/search/Search.jsx";
import LightScheme from "../../atoms/lightScheme/LightScheme.jsx";
import InlineSVG from "react-inlinesvg";
import foxIcon from "../../../assets/icons/Group 235fox.svg"
import {useContext} from "react";
import {ThemeContext} from "../../../providers/TheneContext.js";
const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const handleScroll = (sectionId) => () => {
        console.log(sectionId, 'sectionId');
        const sectionElement = document.getElementById(sectionId);
        if(sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={styles.header}>
            <div className={styles.leftWrapper}>
                <Logo/>
                <div className={styles.leftText}>
                    <HeaderText handleScroll={handleScroll('home')} >Home</HeaderText>
                    <HeaderText handleScroll={handleScroll('marketplace')}>Marketplace</HeaderText>
                    <HeaderText handleScroll={handleScroll('creators')}>Creators</HeaderText>
                    <HeaderText handleScroll={handleScroll('contactUs')}>Contact us</HeaderText>
                </div>
            </div>
            <div className={styles.rightWrapper}>
                <Search/>
                <LightScheme handleClick={toggleTheme}/>
                <div> <InlineSVG src={foxIcon}/></div>
            </div>
        </div>
    );
};

export default Header;