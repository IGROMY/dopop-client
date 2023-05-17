import React from 'react';
import styles from './Search.module.scss'
import InlineSVG from "react-inlinesvg";
import searchLogo from "../../../icons/search 1search.svg"
const Search = () => {
    return (
        <div className={styles.search}>
            <InlineSVG src={searchLogo}/>
            <input className={styles.input} placeholder="Search" type="text"/>
        </div>
    );
};

export default Search;