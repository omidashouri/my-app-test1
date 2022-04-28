import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import HomeClass from "./pages/HomeClass";

//"react-router-dom": "^5.3.0"
const AppRouter = () => {
    return (

        <Router>
            <Menu/>
            <Switch>
                {/*<Route path={'/'} exact component={Home}/>*/}
                <Route path={'/'} exact component={HomeClass}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/blogs'} component={Blogs}/>
                <Route path={'/contact'} component={Contact}/>
                <Route path={'/post'} component={Post}/>
                <Route component={NotFound}/>
            </Switch>

        </Router>

    )
}


export default AppRouter;