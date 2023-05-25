import React from 'react';
import styles from "./FooterTextTopic.module.scss"
const FooterTextTopic = ({children}) => {
    return (
        <span className={styles.textTopic}>
            {children}
        </span>
    );
};

export default FooterTextTopic;