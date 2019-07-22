import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import getDataFromJson from '../../utilities/getData';
import Button from '@material-ui/core/Button';


class Rental extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            quantityMale: 0,
            quantityFemale: 0,
            quantityUnisex: 0,
            quantity: 0
        }
        this.getData = this.getData.bind(this);

    }


    componentDidMount() {
        this.getData();
    }
    getData() {
        //intial values for sorting
        let indexArr = [1, 2, 3];
        let data = getDataFromJson(indexArr);
        this.setState({ data: data });
    }

    handleClick() {
        alert("clicked");
    }

    IncrementItem = () => {
        this.setState({ quantity: this.state.quantity + 1 });
    }
    DecreaseItem = () => {
        this.setState({ quantity: this.state.quantity - 1 });
    }





    render() {

        return (
            <div>
                <br></br>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}>
                    {this.state.data.map((rentals, index) => {
                        return <Grid item xs={10} sm={3} key={index}>
                            <Paper>
                                <img src={rentals.image}></img>
                                <h1>{rentals.name}</h1>
                                <h3>Price: ${rentals.price}</h3>
                                <Button onClick={this.IncrementItem} color="primary" variant="outlined">+</Button>
                                <Button variant="outlined">{this.state.quantity}</Button>
                                <Button onClick={this.DecreaseItem} color="secondary" variant="outlined">-</Button>
                                <br></br><br></br>
                                <Button variant="outlined" color="primary">Add</Button>
                            </Paper>
                        </Grid>
                    })}
                </Grid>

                <br></br>
                <Button color="primary" variant="contained" href="/accesories">Next</Button>   
            </div>
        );
    }
}

export default Rental;

