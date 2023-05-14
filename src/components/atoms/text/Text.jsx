import React from 'react';
import cn from "classnames";
import styles from "./Text.module.scss"
const Text = ({children,variant}) => {
    const classes = cn({
        [styles.heading]: variant==="heading",
        [styles.primary]: variant==="primary",
        [styles.secondary]: variant==="secondary",
        [styles.subHeading]: variant==="subHeading",
    })
    return (
        <span className={classes}>
            {children}
        </span>
    );
};

export default Text;