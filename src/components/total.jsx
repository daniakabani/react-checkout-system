import React from 'react';

const GrandTotal = function (props) {
    function calculateTotal () {
        console.log(props)
        let result = 0
        result = props.premium+props.classic+props.standout;
        
        props.calc(result)
    }
    return(
        <div className="GrandTotal">
            <button onClick={calculateTotal}>CheckOut</button>
            <article>
                <h3>Grand Total: ${ props.total }</h3>
            </article>
        </div>
    )
}

export default GrandTotal;