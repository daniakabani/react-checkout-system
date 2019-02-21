import React from "react";

const ClassicCartItem = function(props){
    function addTotal(){
        const {client, count, price, add} = props
        let result = 0;
        let newCounter = count + 1;

        if(client === 'apple'){
            // they get a dropped price to 299.99 so the discount is about 0.07120963497321896 or 0.7120963497321896%
            result = price*newCounter-(price*newCounter*0.07120963497321896);
            
            add(result, newCounter)
        }
        else if(client === 'ford'){
            // they get a discount to 309.99 so the discount is 0.04331403449023199 or 0.04331403449023199%
            result = price*newCounter-(price*newCounter*0.04331403449023199);
            
            add(result, newCounter)
        }
        else{
            result = newCounter*price;
            
            add(result, newCounter)
        }
    }
    function subTotal(){
        const {client, count, price, add} = props
        let result = 0;
        let newCounter = count - 1;
        if(client === 'apple'){
            // they get a dropped price to 299.99 so the discount is about 0.07120963497321896 or 0.7120963497321896%
            result = price*newCounter-(price*newCounter*0.07120963497321896);
            
            add(result, newCounter)
        }
        else if(client === 'ford'){
            // they get a discount to 309.99 so the discount is 0.04331403449023199 or 0.04331403449023199%
            result = price*newCounter-(price*newCounter*0.04331403449023199);
            
            add(result, newCounter)
        }
        else{
            result = newCounter*price;
            
            add(result, newCounter)
        }
    }
    return(
        <div className="cart-item">
            <p>Standout AD</p>
            <span>
                <label>
                    Quantity: 
                    <aside onClick={addTotal}>+</aside>
                    <input type="number" min="1" max="100" value={props.count}/>
                    <aside onClick={subTotal}>-</aside>
                </label>
            </span>
            <p>Price: ${ props.total }</p>
            <i className="fa fa-times" onClick={props.hide}></i>
        </div>
    )
}

export default ClassicCartItem;