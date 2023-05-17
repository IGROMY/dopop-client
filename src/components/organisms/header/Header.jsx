import React from 'react';
import styles from './Header.module.scss'
import Logo from "../../atoms/logo/Logo.jsx";
import HeaderText from "../../atoms/headerText/HeaderText.jsx";
import Search from "../../atoms/search/Search.jsx";
import LightScheme from "../../atoms/lightScheme/LightScheme.jsx";
import InlineSVG from "react-inlinesvg";
import foxIcon from "../../../icons/Group 235fox.svg"
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftWrapper}>
                <Logo/>
                <div className={styles.leftText}>
                    <HeaderText>Home</HeaderText>
                    <HeaderText>Marketplace</HeaderText>
                    <HeaderText>Creators</HeaderText>
                    <HeaderText>Contact us</HeaderText>
                </div>
            </div>
            <div className={styles.rightWrapper}>
                <Search/>
                <LightScheme/>
                <div> <InlineSVG src={foxIcon}/></div>
            </div>
        </div>
    );
};

export default Header;