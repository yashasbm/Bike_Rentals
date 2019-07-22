import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import getDataFromJson from '../../utilities/getData';
import Button from '@material-ui/core/Button';
import RentalRow from '../rentalRow';


class Rental extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
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

  



    render() {

        return (
            <div>
                <br></br>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}>
                    {this.state.data.map((rental, index) => {
                        return(

<RentalRow data={rental} key={index} />
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

