import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionalBasedComponent16 from "./components/FunctionalBasedComponent16";
import {createContext} from "react";
import FunctionalBasedComponent17 from "./components/FunctionalBasedComponent17";
import FunctionalBasedComponent18 from "./components/FunctionalBasedComponent18";

export const ContextBackGroundColor = createContext('blue')
console.log(ContextBackGroundColor)
function App() {
    return (
        <ContextBackGroundColor.Provider value='dark'>
            <div className="App">

                <FunctionalBasedComponent18/>
            </div>
         </ContextBackGroundColor.Provider>
    );
}

export default App;
