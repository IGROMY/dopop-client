import React from 'react';
import styles from "./HeaderText.module.scss";

const HeaderText = ({children, handleScroll}) => {

    return (
        <span onClick={handleScroll} className={styles.headerPrimary}>
            {children}
        </span>
    );
};

export default HeaderText;