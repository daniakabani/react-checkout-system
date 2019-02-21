import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ClassicAd from './components/classic';
import PremiumAd from './components/premium';
import StandOutAd from './components/standout';
import ClassicCartItem from './components/ClassicItem';
import PremiumCArtItem from './components/PremiumItem';
import StandoutCartItem from './components/StandoutItem';
import CartTotalItem from './components/total';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      classicPrice: 269.99,
      classicCount: 0,
      showClassic: null,
      totalClassic: 0.00,
      standOutPrice: 322.99,
      standoutCount: 0,
      showStandOut: null,
      totalStandout: 0.00,
      PremiumPrice: 394.99,
      premiumCount: 0,
      showPremium: null,
      totalPremium: 0.00, 
      client: 'name',
      GrandTotal: 0.00
    }
  }

  displayClassic = () => {
    this.setState({
      showClassic: true
    })
  }

  hideClassic = () => {
    this.setState({
      showClassic: null,
      classicCount: 0,
      totalClassic: 0.00
    })
  }

  addClassic = (value, count) =>{
    if (count <=0){
      this.setState({
        classicCount: 0,
        totalClassic: value
      })
    }
    else{
      this.setState({
        totalClassic: value,
        classicCount: count
      })
    }
  }

/* end of classic logic */
  displayStandout = () => {
    this.setState({
      showStandOut: true
    })
  }

  hideStandout = () => {
    this.setState({
      showStandOut: null,
      standoutCount: 0,
      totalStandout: 0.00
    })
  }

  addStandout = (value, count) =>{
    if (count <=0){
      this.setState({
        standoutCount: 0,
        totalStandout: value
      })
    }
    else{
      this.setState({
        standoutCount: count,
        totalStandout: value
      })
    }
  }

/* end of standout */
  displayPremium = () => {
    this.setState({
      showPremium: true
    })
  }

  hidePremium = () => {
    this.setState({
      showPremium: null,
      premiumCount: 0,
      totalPremium: 0.00
    })
  }

  addPremium = (value, count) =>{
    if (count <=0){
      this.setState({
        premiumCount: 0,
        totalPremium: value
      })
    }
    else{
      this.setState({
        premiumCount: count,
        totalPremium: value
      })
    }
  }

  getTotal = total => {
    this.setState({
      GrandTotal: total
    })
  }

  /*** state handle change methods */

  handleChange = (event) => {
    this.setState({
      client: event.target.value.toLowerCase(),
    })
    this.hideClassic();
    this.hideStandout();
    this.hidePremium();
  }

  render() {

    let Classic = null;
    let Premium = null;
    let StandOut = null;
    const {
      client, showClassic, showPremium, 
      showStandOut, totalClassic, totalPremium, 
      totalStandout, classicCount, premiumCount, 
      GrandTotal, standoutCount, classicPrice,
      PremiumPrice, standOutPrice, 
    } =  this.state;
    const {
      addClassic, addStandout, addPremium,
      hideClassic, hidePremium, hideStandout,
      getTotal
    } = this;

    let clientPrivilege = null;

    if(this.state.client === 'unilever'){
      clientPrivilege = 
      <article>
        <h3>Unilever Pack</h3>
        <h4>get a 3 for 2 deal on classic ads</h4>
      </article>
    }
    else if(client === 'apple'){
      clientPrivilege = 
      <article>
        <h3>Apple Pack</h3>
        <h4>Discounted Standout ads becomes 299.99 per ad</h4>
      </article>
    }
    else if(client === 'nike'){
      clientPrivilege = 
      <article>
        <h3>Nike Pack</h3>
        <h4>get a discount for premium ads where the price becomes 379.99 if 4 or more ads purchased</h4>
      </article>
    }
    else if(client === 'ford'){
      clientPrivilege = 
      <article>
        <h3>Ford Pack</h3>
        <h4>get a 5 for 4 deal on classic ads</h4>
        <h4>get a discount for standout ads where the price becomes 309.99</h4>
        <h4>get a discount for premium the price becomes 389.99 per ad if 3 or more ads purchased</h4>
      </article>
    }
    else{
      clientPrivilege = 
      <article>
        <h3>
        select an item to update your cart
        </h3>
      </article>
    }

    if(showClassic){
      Classic = <ClassicCartItem refs="classic" total={totalClassic} client={client} price={classicPrice} add={addClassic} count={classicCount} hide={hideClassic} />;
    }
    if(showStandOut){
      StandOut = <StandoutCartItem total={totalStandout} client={client} price={standOutPrice} add={addStandout} count={standoutCount} hide={hideStandout} />;
    }
    if(showPremium){
      Premium = <PremiumCArtItem total={totalPremium} client={client} price={PremiumPrice} add={addPremium} count={premiumCount} hide={hidePremium} />;
    }

    return(
      <section id="home">
        <Header></Header>
        <section className="client-name">
          <label>
            company name:
            <input type="text" value={this.state.client} onChange={this.handleChange} />
          </label>
        </section>
        <div className="cards-wrapper">
          <ClassicAd show={this.displayClassic} ></ClassicAd>
          <PremiumAd show={this.displayPremium} ></PremiumAd>
          <StandOutAd show={this.displayStandout} ></StandOutAd>
        </div>
        <div className="client-info">
          { clientPrivilege }
        </div>
        <div className="cart">
          { Classic }
          { Premium }
          { StandOut }
        </div>
        <CartTotalItem classic={totalClassic} standout={totalStandout} premium={totalPremium} calc={getTotal} total={GrandTotal} />
      </section>
    )
  }
}

export default App;
