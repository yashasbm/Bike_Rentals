import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class RentalRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
        this.IncrementItem = this.IncrementItem.bind(this);
        this.DecreaseItem = this.DecreaseItem.bind(this);
        this.passData = this.passData.bind(this);
    }

    //increments the count for the bikes
    IncrementItem() {
        this.setState({ quantity: this.state.quantity + 1 });
    }
    
    //decrements the count for the bikes
    DecreaseItem() {
        if (this.state.quantity > 0)
            this.setState({ quantity: this.state.quantity - 1 });
    }

    //stores the user selected count for each bike
    passData() {
        localStorage.setItem(this.props.data.id, this.state.quantity);
        localStorage.setItem(this.props.data.name, this.props.data.price);
    }

    render() {

        return (
            <div>
                {this.props.data &&
                    <div>
                        <Paper >
                            {/* bikes image */}
                            <img src={this.props.data.image}></img>

                            {/* bikes name */}
                            <h1>{this.props.data.name}</h1>

                            {/* bikes price */}
                            <h3>Price: ${this.props.data.price}</h3>
                            
                            <Button onClick={this.IncrementItem} color="primary" variant="outlined">+</Button>
                            <Button variant="outlined">{this.state.quantity}</Button>
                            <Button onClick={this.DecreaseItem} color="secondary" variant="outlined">-</Button>
                            <br></br><br></br>
                            <Button variant="outlined" color="primary" onClick={this.passData}>Add</Button>
                        </Paper>
                    </div>

                }
                <br></br>
            </div>
        );
    }
}

export default RentalRow;

