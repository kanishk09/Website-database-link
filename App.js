import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';

const http = new HttpService();

class App extends Component {
    
    constructor (props) {
        super(props);
        
        //http.getProducts();
        //this.loadData = this.loadData.bind(this);    
        //BIND FUNCTION - - -NOT NEEDED IN ES6
        this.state = {products:[]};
        
        this.loadData = this.loadData.bind(this);        
        this.productList = this.productList.bind(this);
        this.loadData();
    }
    
    loadData = () => {
        var self = this;  
        http.getProducts().then(data => {
            self.setState({products: data})
        },err => {
            //console.log(500).send({error:" you SUCK "});
        });
    }
    
    productList = () => {
        const list = this.state.products.map((product) => 
            <div className = "col-sm-3" key={product._id}>
                <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
            </div> 
        )
        return (list);
    }
    
    
   
    
    render() {
        return(
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>"Welcome to react"</h2>
                </div>
                <div className="container app-main">
                    <div className="row">
                        {this.productList()}  
                    </div>
                    
                </div> 
            </div>
        );
    }
}


export default App;

