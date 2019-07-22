import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import getDataFromJson from '../../utilities/getData';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Accessories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            accessoriesAdult: 0,
            accessoriesKids: 0,
            accessories: 0
        }
        this.getData = this.getData.bind(this);

    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let indexArr = [4, 5];
        let data = getDataFromJson(indexArr);
        this.setState({ data: data });
    }

    IncrementItem = () => {
        this.setState({ accessories: this.state.accessories + 1 });
        localStorage.setItem("accessories",this.state.accessories);
    }
    DecreaseItem = () => {
        this.setState({ accessories: this.state.accessories - 1 });
        localStorage.setItem("accessories",this.state.accessories);
    }



    render() {

        return (
            <div>
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
                                    <Button variant="outlined">{this.state.accessories}</Button>
                                    <Button onClick={this.DecreaseItem} color="secondary" variant="outlined">-</Button>
                                    <br></br><br></br>
                                    <Button variant="outlined" color="primary">Add</Button>
                                </Paper>
                            </Grid>
                        })}
                    </Grid>
                </div>

                <br></br>
                <Button color="primary" variant="contained" href="/">Back</Button>
                <Button color="primary" variant="contained">Skip</Button>
                <Button color="primary" variant="contained" href="/insurance">Next</Button>

            </div>

        );
    }
}

export default Accessories;