import {Link} from "react-router-dom";


const menu_1 = ()=>{

    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/post'>Post</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>

    )
}

export default menu_1;