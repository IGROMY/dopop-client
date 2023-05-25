import React from 'react';
import styles from "./FooterText.module.scss"
const FooterText = ({children}) => {
    return (
        <span className={styles.footerText}>
            {children}
        </span>
    );
};

export default FooterText;