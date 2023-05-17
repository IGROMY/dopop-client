import React from 'react';
import styles from "./HeaderText.module.scss";

const HeaderText = ({children}) => {

    return (
        <span className={styles.headerPrimary}>
            {children}
        </span>
    );
};

export default HeaderText;