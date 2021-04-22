import React from 'react';
import { connect } from 'react-redux';
import { fetchFoods, addToCart } from '../actions';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

class Item extends React.Component {
    componentDidMount(){
        this.props.fetchFoods();
    }
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(event){
        this.props.addToCart(this.props.foods.id);
    }
    renderList(){        
        return(
            <div style={{marginTop:'96px'}}>
            {this.props.foods.map(food =>{
                return(
                    <div key={food.id}>
                        <Card style={{marginBottom:'8px'}}>
                            <CardMedia image={food.image} style={{height:'240px'}}/>
                            <div style={{display:'flex', margin:'8px'}}>
                                <div style={{marginTop:'4px', color:'#6e7679'}}>{food.rating}</div>
                                <Rating style={{ color: '#f9234a' }} name="read-only" value={food.rating}/>
                            </div>
                            <div style={{fontSize:'20px',fontWeight:'bold', margin:'8px',color:'#424749'}}>{food.title}</div>
                            <div style={{display:'flex', margin:'8px'}}>
                                <div style={{ color:'#6e7679' }}>{food.by}</div>
                                <b style={{margin:'0 8px', color:'#6e7679'}}>.</b>
                                <div style={{ color:'#6e7679' }}>{food.location}</div>
                            </div>
                            <div style={{display:'flex', margin:'8px'}}>
                                <div style={{fontSize:'20px',fontWeight:'bold',color:'#424749'}}>Rp {food.price}</div>
                                <Button onClick={this.addToCart} style={{ backgroundColor: '#f9234a', color:'white',fontWeight:'bold',marginLeft:'auto' }}>ADD +</Button>
                            </div>
                        </Card>
                    </div>
                )
            })}
            </div>
        )
            
    }
    render(){
        return (
            <div>
                <div>{this.renderList()}</div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return { 
        foods: Object.values(state.foods),
        cart: state.cartProducts
    };
};

export default connect(mapStateToProps, { fetchFoods, addToCart })(Item);