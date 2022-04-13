import React from "react";

const PropExample = (props) =>{
    // const {flag, data , functionfromparent} = props;

    const {getvaluefromchild} = props;
    const handleClick=()=>{
        const i = 5;
        getvaluefromchild(i + 1);
    }
    return(
        <div>
            {/*{flag ? data : 'flag is false'}*/}
            {/*<button onClick={functionfromparent}>from parent to child</button>*/}

            <button onClick={handleClick}>from child to parent</button>
        </div>
    )
}

export default PropExample;