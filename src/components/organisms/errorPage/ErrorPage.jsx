import React from "react";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <h2>Something Went Wrong</h2>
            <p>Sorry, an error occurred while loading the data.</p>
        </div>
    );
};

export default ErrorPage;
