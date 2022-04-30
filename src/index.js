import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.js.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRedux from "./redux/AppRedux";
import {Provider} from "react-redux";
import store from "./redux/components/store";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <Provider store={store}>
        <AppRedux/>
    </Provider>
);


/*const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <GlobalState>
        <MovieApp/>
    </GlobalState>
);*/

/*ReactDOM.createRoot(
    document.getElementById('root')
).render(<AppCounter/>);*/


/*ReactDOM.createRoot(
    document.getElementById('root')
).render(<Greeting/>);*/


/*ReactDOM.createRoot(
    document.getElementById('root')
).render(<App12/>);*/

/*ReactDOM.createRoot(
    document.getElementById('root')
).render(<AppRouter12/>);*/

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
