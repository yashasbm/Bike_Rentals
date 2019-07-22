import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import getDataFromJson from '../../utilities/getData';
import Button from '@material-ui/core/Button';
import RentalRow from '../rentalRow';

class Rental extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.getData = this.getData.bind(this);
    }

    // Loades data as soon as the page gets mounted
    componentDidMount() {
        this.getData();
    }

    //reads the json data from utility function
    getData() {
        //Specifies which id number in the JSON array it should fetch
        let indexArr = [1, 2, 3];
        let data = getDataFromJson(indexArr);
        this.setState({ data: data });
    }

    render() {

        return (
            <div >
                <br></br>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}>
                        {this.state.data.map((rental, index) => {
                            return (
                                <Grid item xs={10} sm={3}>
                                    <RentalRow data={rental} key={index} />
                                </Grid>
                            )
                        })}
                </Grid>
                <br></br>
                <Button color="primary" variant="contained" href="/accesories">Next</Button>
            </div>
        );
    }
}

export default Rental;

