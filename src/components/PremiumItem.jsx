import React from "react";

const ClassicCartItem = function(props){
    function addTotal(){
        const {client, price, count, add} = props
        let result = 0;
        let newCounter = count + 1
        if(client === 'nike' && newCounter >= 4){
            // they get a discount to 379.99 so the discount is about 0.03797564495303675%
            result = (price*newCounter)-newCounter*price*0.03797564495303675;
            add(result, newCounter)
        }
        else if(client === 'ford' && newCounter >= 3){
            // they get a discount to 389.99 so the discount is about 0.012658548317678963%
            result = (price*newCounter)-newCounter*price*0.012658548317678963;

            add(result, newCounter)
        }
        else{
            result = newCounter*price;
            
            add(result, newCounter)
        }
    }
    function subTotal(){
        const {client, price, count, add} = props
        let result = 0;
        let newCounter = count - 1
        if(client === 'nike' && newCounter >= 4){
            // they get a discount to 379.99 so the discount is about 0.03797564495303675%
            result = (price*newCounter)-newCounter*price*0.03797564495303675;
            
            add(result, newCounter)
        }
        else if(client === 'ford' && newCounter >= 3){
            // they get a discount to 389.99 so the discount is about 0.012658548317678963%
            result = (price*newCounter)-newCounter*price*0.012658548317678963;
            
            add(result, newCounter)
        }
        else{
            result = newCounter*price;
            
            add(result, newCounter)
        }
    }
    return(
        <div className="cart-item">
            <p>Premium AD</p>
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