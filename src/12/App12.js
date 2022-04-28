import React, {Fragment} from 'react';
import './assets/styles/styles'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "./config/routes";
import Layout from "./containers";


//34:00
const App12 = () => {
    return (
        <BrowserRouter>
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
                            return(
                                <Route key={key} {...items} element={<Layout>element</Layout>}/>
                        )
                        })
                    }

                </Routes>
            {/*</Layout>*/}
        </BrowserRouter>
    );
}

export default App12;