import React from 'react';
import classes from './Logo.module.css';
import LogoBurger from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height, marginBottom: props.marginBottom }}>
        <img src={LogoBurger} alt="MyBurger" />
    </div >
);

export default logo;