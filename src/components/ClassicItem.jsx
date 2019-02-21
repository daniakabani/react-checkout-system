import React from "react";

const ClassicCartItem = function(props){
    function AddTotal(){
        const { count, price, add, client } = props;
        let result = 0;
        let newCounter = count + 1

        if(client === 'unilever' && newCounter%3 === 0){
            result = (price*newCounter)-(price*newCounter/3)
            
            add(result, newCounter)
        }
        else if(client === 'ford' && newCounter%5 === 0){
            result = (price*newCounter)-(price*newCounter/5)
            
            add(result, newCounter)
        }
        else{
            result = newCounter*price;
            
            add(result, newCounter)
        }   
    }

    function subTotal(){
        const { count, price, add, client } = props;
        let result = 0;
        let newCounter = count - 1

        if(client === 'unilever' && newCounter%3 === 0){
            result = (price*newCounter)-(price*newCounter/3)
            result = result.toFixed(2);
            add(result, newCounter)
        }
        else if(client === 'ford' && newCounter%5 === 0){
            result = (price*newCounter)-(price*newCounter/5)
            result = result.toFixed(2);
            add(result, newCounter)
        }
        else{
            result = newCounter*price;
            result = result.toFixed(2);
            add(result, newCounter)
        }   
    }
    
    return(
        <div className="cart-item">
            <p>Classic AD</p>
            <span>
                <label>
                    Quantity: 
                    <aside onClick={ AddTotal } >+</aside>
                    <input type="number" min="1" max="100" value={props.count}/>
                    <aside onClick={ subTotal }>-</aside>
                </label>
            </span>
            <p>Price: ${ props.total }</p>
            <i className="fa fa-times" onClick={props.hide}></i>
        </div>
    )
}

export default ClassicCartItem;