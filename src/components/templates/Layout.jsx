import React from 'react';
import styles from './Layout.module.scss'
import useThemeStore from "../../providers/themeStore";
import Header from "../organisms/header/Header";

const Layout = ({children}) => {
    const { isDark } = useThemeStore();

    return (
        <div className={isDark ? styles.dark : styles.light}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;