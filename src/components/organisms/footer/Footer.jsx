import React from 'react';
import styles from "./Footer.module.scss"
import Logo from "../../atoms/logo/Logo.jsx";
import Search from "../../atoms/search/Search.jsx";
import FooterTextTopic from "../../atoms/footerText/FooterTextTopic.jsx";
import FooterText from "../../atoms/footerText/FooterText.jsx";
const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerFooter}>

                <div className={styles.containerLogo}>
                    <Logo/>
                    <div>
                        <input className={styles.input} placeholder="Your e-mail" type="text"/>
                    </div>
                </div>

                <div className={styles.containerMenu}>
                    <FooterTextTopic>Menu</FooterTextTopic>
                    <FooterText>MarketPlace</FooterText>
                    <FooterText>Creators</FooterText>
                    <FooterText>Home</FooterText>
                </div>

                <div className={styles.containerCreator}>
                    <FooterTextTopic>Creator</FooterTextTopic>
                    <FooterText>Sign In</FooterText>
                    <FooterText>Sing Up</FooterText>
                    <FooterText>Connect wallet</FooterText>
                </div>

                <div className={styles.containerPages}>
                    <FooterTextTopic>Pages</FooterTextTopic>
                    <FooterText>Contact Us</FooterText>

                </div>

                <div className={styles.containerDesign}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;