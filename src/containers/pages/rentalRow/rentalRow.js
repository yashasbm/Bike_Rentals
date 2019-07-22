import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class RentalRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
        this.IncrementItem = this.IncrementItem.bind(this);
        this.DecreaseItem = this.DecreaseItem.bind(this);
        this.passData=this.passData.bind(this);


    }



    IncrementItem () {
        this.setState({ quantity: this.state.quantity + 1 });
    }
    DecreaseItem () {
        if(this.state.quantity > 0)
        this.setState({ quantity: this.state.quantity - 1 });
    }


    passData(){

        localStorage.setItem(this.props.data.name,this.state.quantity);
    }


    render() {

        return (
            <div>
               {this.props.data &&
                        <Grid item xs={10} sm={3} >
                            <Paper >
                                <img src={this.props.data.image}></img>
                                <h1>{this.props.data.name}</h1>
                                <h3>Price: ${this.props.data.price}</h3>
                                <Button  onClick={this.IncrementItem} color="primary" variant="outlined">+</Button>
                                <Button variant="outlined">{this.state.quantity}</Button>
                                <Button onClick={this.DecreaseItem} color="secondary" variant="outlined">-</Button>
                                <br></br><br></br>
                                <Button variant="outlined" color="primary" onClick={this.passData}>Add</Button>
                            </Paper>
                        </Grid>
                       
                  
               }
                <br></br>
            </div>
        );
    }
}

export default RentalRow;

