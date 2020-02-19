import React, {Component} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

export default class Additem extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            price: 100,
            quantity: 100
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeName(event) {
        this.setState({ name: event.target.value });
    }

    onChangePrice(event) {
        this.setState({ price: event.target.value });
    }
    onChangeQuantity(event) {
        this.setState({ quantity: event.target.value });
    }



    onSubmit(e) {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            username: '',
            price: this.state.price,
            quantity: this.state.quantity,
            token: sessionStorage.getItem("zzz"),
        }
        console.log(newItem);

        axios.post('http://localhost:4000/item/add', newItem)
             .then(res => console.log(res.data));

        this.setState({
            username: '',
            name: '',
            price: 100,
            quantity: 100
        });
    }

    render() {
        return (
            <div>
            <h1>ADD NEW ITEM</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeName}
                               />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Price}
                               onChange={this.onChangePrice}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Quantity}
                               onChange={this.onChangeQuantity}
                               />  
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Item" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}