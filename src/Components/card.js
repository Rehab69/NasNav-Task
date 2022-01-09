import React, { Component } from 'react';
import { Card ,Button} from 'react-bootstrap';
import '../App.css'
class CardItem extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }
componentDidUpdate(){
}
    render() {
        return (
            <>
            
                <Card style={{ width: '18rem' }} className="item">
                    <Card.Img variant="top" src={this.props.imgSrc} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>Price {this.props.price}</Card.Text>
                    </Card.Body>
                    
                    <Card.Body>
                        <Button onClick={this.props.onAddToCard}>Add to Card</Button>
                    </Card.Body>
                </Card>

            </>
        );
    }
}

export default CardItem;