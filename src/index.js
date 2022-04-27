import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieApp from "./components/movie-app/MovieApp";
import GlobalState from "./components/movie-app/GlobalContext";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <GlobalState>
        <MovieApp/>
    </GlobalState>
);


/*ReactDOM.createRoot(
    document.getElementById('root')
).render(<Greeting/>);*/


/*ReactDOM.createRoot(
    document.getElementById('root')
).render(<AppRouter/>);*/


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />

  </React.StrictMode>

    //40:14
    // <Users/>

);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
