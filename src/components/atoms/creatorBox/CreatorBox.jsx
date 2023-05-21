import React from 'react';
import styles from './CreatorBox.module.scss'
import Text from "../text/Text.jsx";
import InlineSVG from "react-inlinesvg";
import avatar from '../../../assets/images/mrNobody.svg'

const CreatorBox = ({name, balance}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src={avatar}/>
            </div>
            <div className={styles.textBox}>
                <Text variant='primary'>@{name}</Text>
                <Text variant='secondary'>{balance} ETH</Text>
            </div>
        </div>
    );
};

export default CreatorBox;