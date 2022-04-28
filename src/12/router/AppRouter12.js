import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";


// "react-router-dom": "^6.3.0"
const AppRouter12 = () => {
    return (

        <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/post'>Post</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <Routes>
                <Route path={'/'} exact element={Home}/>
                <Route path={'/about'} element={About}/>
                <Route path={'/blogs'} element={Blogs}/>
                <Route path={'/contact'} element={Contact}/>
                <Route path={'/post'} element={Post}/>
                <Route path={'*'} element={NotFound}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter12;