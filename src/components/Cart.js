import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoods } from '../actions';


class Cart extends Component{
    componentDidMount(){
        this.props.fetchFoods();
    }
    getItemById(id) {
    let obj = {};
    this.props.foods.map((item) => {
      if (item.id === id) {
        obj = item;
      }
    })
    return obj;
    }
    getQuantity(id) {
        let quant = 0;
        for(let item in this.props.cart){
          if (this.props.cart[item] === id) {
            quant++
          };
        }
        return quant;
    }
    totalPricesArray() {
    let getPricesById = (id) => { return this.getItemById(id).price };
    let prices = [];
    this.props.cart.map(function (key) {
      prices.push(getPricesById(key));
    })
    return prices;
    }

    render(){

        let total = this.totalPricesArray().reduce(function (prev, next) {
      return prev + next;
        }, 0)
        let rendered = [];

        return(
            <div>
                <div className="row">
                    <div className="container-fluid">
                        <div className="table table-hover">
                            <div>{total}</div>
                            <div>
                                {
                                    this.props.cart.map((key) => {
                                        if(rendered.indexOf(key) === -1){
                                            let product = this.getItemById(key);
                                            let quantity = this.getQuantity(key);
                                            rendered.push(key);
                                            return (<div key={key} quantity={quantity} product={product} />)
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }

}

const mapStateToProps = (state) => {
  return {
    cart: state.cartProducts,
  }
}


export default connect(mapStateToProps,{fetchFoods})(Cart);
