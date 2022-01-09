import React, { Component } from 'react';
import { Card ,Button} from 'react-bootstrap';
import '../App.css'

class DropDownCard extends Component {
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
                <Card  className="dropdownCard" >
                    <div className="dropdownItem">
                    <Card.Img variant="top" src={this.props.imgSrc} style={{width:"60px",height:"70px"}} />
                    </div>
                    <div className="dropdownItem">
                    <Card.Body >
                        <Card.Text>{this.props.name}</Card.Text>
                        <Card.Text>Price {this.props.price}</Card.Text>
                        <Card.Text>Count {this.props.count}</Card.Text>
                    </Card.Body>
                    </div>
                </Card>

            </>
        );
    }
}

export default DropDownCard;