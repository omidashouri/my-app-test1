import React, {Fragment} from 'react';
import './assets/styles/styles'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import routes from "./config/routes";
import Layout from "./containers";


//
const App12 = () => {
    return (
        <Router>
            {/*<Layout>*/}
            <Routes>
                {
                    routes.map((route, key) => {
                        /*return (
                            // <Route key={key} exact={route.exact} path={route.path} element={route.element}/>
                            <Route key={key} {...route}/>
                        )*/

                        const {layout, element, ...items} = route;
                        const Layout = layout ? layout : Fragment
                        return <Route key={key} {...items} element={<Layout>{element}</Layout>}/>
                    })
                }
            </Routes>
            {/*</Layout>*/}
        </Router>
    );
}

export default App12;