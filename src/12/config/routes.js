import Home from './../views/Home';
import About from './../views/About';
import Contact from './../views/Contact';
import NotFound from './../views/NotFound';
import Layout from "../containers";

const routes = [
  { path: '/', exact: true, element: <Home/>, layout: Layout},
  { path: '/about', element: <About/>, layout: Layout},
  { path: '/contact', element: <Contact/> },
  { path: '*', element: <NotFound/> }
];

export default routes;
