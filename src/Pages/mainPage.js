import React, { Component } from 'react';
import CardItem from '../Components/card';
import CardIcon from '../Components/cardIcon';
import NavBar from '../Components/navBar';
import data from '../Services/data.js'
import '../App.css'

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            cardProducts: [],
            count: 0
        };

    }
    componentDidUpdate() {
        console.log(this.state.cardProducts)
    }
    onTogelIcon = () => {
        this.setState({ showDropdown: true })
    }

    onAddToCard = (product) => {
        console.log("prod", product)
        console.log("cardproducts", this.state.cardProducts)

        const productExists = this.state.cardProducts?.find(item => item.id === product.id)
        const modifiedCardProducts = productExists ? this.state.cardProducts.map(item => (item.id === productExists.id ? { ...item, count: ++item.count } : item)) : this.state.cardProducts.concat([product])
        console.log("ddddd", modifiedCardProducts)
        this.setState({ cardProducts: modifiedCardProducts, count: this.state.count + 1 })

    }



    render() {
        return (
            <>
                <NavBar cardProducts={this.state.cardProducts} count={this.state.count}></NavBar>
                <div className="MainContainer">

                {/* <CardIcon cardProducts={this.state.cardProducts} count={this.state.count} /> */}
                
                    {data.map(prod => <CardItem key={prod.id} name={prod.name} price={prod.price} imgSrc={prod.imgSrc} onAddToCard={() => this.onAddToCard(prod)} />)}
                
                </div>
            </>
        );
    }
}

export default MainPage;