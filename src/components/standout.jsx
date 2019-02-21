import React from "react";

const Standout = function(props){
    return(
        <div className="card">
            <header>
                <h3>Standout Ad</h3>
            </header>
            <div className="pricing">
                <span className="unit-price">$</span>
                322.99
                <span className="period">/month</span>
            </div>
            <article>
                <p>What will you get?</p>
                <p>basic level of advertisment</p>
                <p>longer presentaion text</p>
                <p>Allows to use company logo</p>
            </article>
            <span onClick={props.show}>
                Add to cart 
            </span>
        </div>
    )
}

export default Standout;