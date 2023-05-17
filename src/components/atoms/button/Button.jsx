import React from 'react';
import cn from "classnames"
import styles from "./Button.module.scss"
const Button = ({children, variant}) => {
    const classes = cn({
        [styles.connectWallet]: variant==="connectWallet",
        [styles.viewAllItems]: variant==="viewAllItems",
        [styles.send]: variant==="send",
    })
    return (
        <button className={classes}>
            {children}
        </button>
    );
};

export default Button;