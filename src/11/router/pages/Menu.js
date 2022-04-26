import {Link, Route} from "react-router-dom";
import './../../myCss.css'

const MenuItem = ({path,label})=>{

    return(
        <Route
         path={path}
         exact
         children={({match})=>{
             return(
                 // <li className={match ? 'bg-danger' : ''}>
                 <li className={match ? 'active' : ''}>
                     <Link to={path}>{label}</Link>
                 </li>
             )
         }}
        />
    )
}


const Menu = ()=>{

    return(
        <ul>
            <MenuItem path={'/'} label={'Home'} />
            <MenuItem path={'/about'} label={'About'}/>
            <MenuItem path={'/blogs'} label={'blogs'}/>
            <MenuItem path='/post/:post_id' label={'post'}/>
            <MenuItem path={'/contact'} label={'contact'}/>
        </ul>
    )
}

export default Menu;