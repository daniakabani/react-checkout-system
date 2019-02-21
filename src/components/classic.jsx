import React from "react";

const Classic =  function(props) {
    return(
        <div className="card">
            <header>
                <h3>Classic Ad </h3>
            </header>
            <div className="pricing">
                <span className="unit-price">$</span>
                269.99
                <span className="period">/month</span>

            </div>
            <article>
                <p>What will you get?</p>
                <p>basic level of advertisments</p>
            </article>
            <span onClick={ props.show }>
                Add to cart
            </span>
        </div>
    )
}

export default Classic;