import {Link} from "react-router-dom";
import React from "react";
import {getCurrentLang, lang} from "../helpers/language";
import {Button} from "reactstrap";


const LANG_MAP = {
    FA:'EN',
    EN:'FA'
}

const Layout = ({children})=>{
    const changeLanguage = (lng)=>{
        localStorage.setItem('language', LANG_MAP[lng]);
        window.location.reload();
    }

return(
    <>
        <header>
            <ul>
                <li><Link to='/'>{lang('home')}</Link></li>
                <li><Link to='/about'>{lang('about')}</Link></li>
                <li><Link to='/contact'>{lang('contact')}</Link></li>
            </ul>
        </header>
        {children}
        <footer>
            footer
            {/* OR: ()=>changeLanguage(getCurrentLang())*/}
            <Button onClick={changeLanguage.bind(this,getCurrentLang())} >{LANG_MAP[getCurrentLang()]}</Button>
        </footer>
    </>
)
}

export default Layout;