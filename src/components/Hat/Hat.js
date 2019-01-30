import React from 'react';
import classes from './Hat.css';

const Hat = (props) => {

    const showBtnClasses = [classes.Btn, classes.ShowBtn];
    let loginBtnClasses = [];
    console.log(props.authenticated);
    
    if (!props.authenticated) {
       loginBtnClasses = [classes.Btn, classes.LoginBtn];
    } else {
        loginBtnClasses = [classes.HideBtn];
    }

    const btnTextCheck = () => {
        return props.isShown === true ? "Hide persons" : "Show Persons";
    }

    return(
        <div className={classes.Hat}>
            <h2 className={classes.Header}>Welcome to the persons manager</h2>
            <div className={classes.BtnWrapper}>
                <button className={showBtnClasses.join(' ')} 
                        onClick={props.showToggle}>{btnTextCheck()}</button>
                <button className={loginBtnClasses.join(' ')} 
                        onClick={props.login}>Log In</button>
            </div>
        </div>
    )
}

export default Hat