import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "./components/store/auth-slice";

const email = "omidashouri@gmail.com"
const password = "123"

function AppRedux() {
    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const authState = useSelector(state => state.auth);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const buttonText = isLoggedIn ? "Logout" : "Login";

    console.log(state);

    const authHandler = () => {
        !isLoggedIn
            ? dispatch(
                authActions.login({
                    email,
                    password
                })
            )
            :
            dispatch(authActions.logout());
    }


    return (
        <div>
            {!isLoggedIn && (
                <React.Fragment>
                    <p>E-mail</p>
                    <input type={'text'} value={email} placeholder={'enter your email address'}/>
                    <p>Password</p>
                    <input type={'text'} value={password} placeholder={'enter your password here'}/>
                </React.Fragment>
            )}
            <div>
                <button onClick={authHandler} className={'btn-success'} type={'submit'}>
                    {buttonText}
                </button>
            </div>

            {isLoggedIn && (
             <React.Fragment>
                 <p>
                     My Email is:
                     <b>{authState.email}</b>
                     <br/>
                     <b>{authState.password}</b>
                 </p>
                 <header>
                     <img src={'document'} className={'App-logo'} alt={'logo'}/>
                 </header>
             </React.Fragment>
            )}
        </div>
    )
}

export default AppRedux;