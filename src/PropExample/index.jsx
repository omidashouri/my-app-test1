import React from "react";

const PropExample = (props) =>{
    const {flag, data , functionfromparent} = props;

    const {sendValueFromChildToParent} = props;
    const handleSendValueFromChildToParent=()=>{
        const i = 5;
        sendValueFromChildToParent(i + 1);
    }
    return(
        <div>
            {flag ? data : 'flag is false'}
            {/*<button onClick={functionfromparent}>function from parent to child</button>*/}
            <button onClick={handleSendValueFromChildToParent}>from child to parent</button>
        </div>
    )
}

export default PropExample;