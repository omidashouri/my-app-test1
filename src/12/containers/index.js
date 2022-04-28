import {Link} from "react-router-dom";
import React from "react";

const Layout = ({children})=>{
return(
    <>
        <header>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </header>
        {children}
        <footer>
            footer
        </footer>
    </>
)
}

export default Layout;