import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionalBasedComponent16 from "./components/FunctionalBasedComponent16";
import {createContext} from "react";

export const ContextBackGroundColor = createContext('blue')
console.log(ContextBackGroundColor)
function App() {
    return (
        <ContextBackGroundColor.Provider value='dark'>
            <div className="App">

                <FunctionalBasedComponent16/>
            </div>
         </ContextBackGroundColor.Provider>
    );
}

export default App;
