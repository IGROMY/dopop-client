import React from 'react';
import styles from './Logo.module.scss'
import InlineSVG from "react-inlinesvg";
import logo from '../../../icons/logo.svg'
const Logo = () => {
    return (
        <div className="logoWrapper">
            <InlineSVG src={logo}/>
        </div>
    );
};

export default Logo;