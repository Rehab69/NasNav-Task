import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, Card } from 'react-bootstrap';
import CardItem from './card';
import DropDownCard from './dropDownCard';

class CardIcon extends Component {
    constructor(props) {
        super(props);


    }
    componentDidUpdate() {
        console.log("icon props", this.props.cardProducts)
    }

    render() {
        return (
            <>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon icon={faShoppingCart} />{this.props.count}
                    </Dropdown.Toggle>
                    {this.props.cardProducts.length ? <Dropdown.Menu>
                        {this.props.cardProducts.map(prod => <Dropdown.Item href="#/action-1"><DropDownCard name={prod.name} price={prod.price} count={prod.count} imgSrc={prod.imgSrc} key={prod.id} /></Dropdown.Item>)}

                    </Dropdown.Menu> : <Dropdown.Menu><Dropdown.Item>Your card is empty</Dropdown.Item></Dropdown.Menu>}

                </Dropdown>
            </>
        );
    }
}

export default CardIcon;