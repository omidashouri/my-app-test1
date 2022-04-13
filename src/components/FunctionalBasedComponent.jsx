import React from "react";
import PropExample from "../PropExample";


const Child = () =>{
    return(
        <div>Child Component for Functional Based Component</div>
    )
}

function FunctionalBasedComponent(){

    /*const functionfromparent = ()=>{
        console.log("this is function from parent")
    }*/

    const getvaluefromchild = (value)=>{
        console.log(value)
    }

    return(
        <div>
            Functional Based Component
            <Child/>
            {/*<PropExample functionfromparent={functionfromparent} flag={true} data="----------"/>*/}
            <PropExample getvaluefromchild={getvaluefromchild} />
        </div>
    )
}

export default FunctionalBasedComponent;