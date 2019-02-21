import React from "react";

const Premium = function(props){
    return(
        <div className="card">
            <header>
                <h3>Premium Ad</h3>
                <h5>most popular</h5>
            </header>
            <div className="pricing">
                <span className="unit-price">$</span>
                394.99
                <span className="period">/month</span>
            </div>
            <article>
                <p>What will you get?</p>
                <p>basic level of advertisment</p>
                <p>longer presentaion text</p>
                <p>Allows to use company logo</p>
                <p>Keeps your ad at the top</p>
                <p>Gains more visibility</p>
            </article>
            <span onClick={props.show}>
                Add to cart
            </span>
        </div>
    )
}

export default Premium;