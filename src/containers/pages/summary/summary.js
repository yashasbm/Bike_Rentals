import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Summary extends Component {

    constructor(props) {
        //fetches localstored data of bikes
        let maleBike = localStorage.getItem("1");
        let femaleBike = localStorage.getItem("2");
        let kidsBike = localStorage.getItem("3");

        //fetches localstored data of accessories
        let adultHelmate = localStorage.getItem("4");
        let kidsHelamte = localStorage.getItem("5");

        //fetches localstored data of insurance
        let insurance = localStorage.getItem("6");

        super(props);
        this.state = {
            maleBike: maleBike,
            femaleBike: femaleBike,
            kidsBike: kidsBike,
            adultHelmate: adultHelmate,
            kidsHelamte: kidsHelamte,
            insurance: insurance,
            data: []
        }
        this.reset = this.reset.bind();
    }


    //clears localstorage and reloads the page for new values
    reset(){
        localStorage.clear();
        window.location.reload();
    }

    render() {

        return (
            <div>
                <br></br>
                <Typography color="primary" variant="h2">Order Summary</Typography>
                <br></br>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}>
                    <Grid item xs={10} sm={4}>
                        <Paper>

                            <Typography align="center" color="primary" variant="h4">NYC Bike Rentals</Typography>
                            <br></br>
                            <Typography align="left" color="primary" variant="h5">Bikes</Typography>
                            <br></br>
                            <Typography align="left" color="inherit" variant="h6">Adult Male Bike <Button variant="outlined" color="primary">{this.state.maleBike} </Button></Typography>
                            <Typography align="left" color="inherit" variant="h6">Adult Female Bike <Button variant="outlined" color="primary">{this.state.femaleBike} </Button></Typography>
                            <Typography align="left" color="inherit" variant="h6">Unisex Kids Bike <Button variant="outlined" color="primary">{this.state.kidsBike} </Button></Typography>

                            <Typography align="left" color="primary" variant="h5">Accessories</Typography>
                            <br></br>
                            <Typography align="left" color="inherit" variant="h6">Adult Unisex Helmet <Button variant="outlined" color="primary">{this.state.adultHelmate} </Button></Typography>
                            <Typography align="left" color="inherit" variant="h6">Kids Unisex Helmet <Button variant="outlined" color="primary">{this.state.kidsHelamte} </Button></Typography>


                            <Typography align="left" color="primary" variant="h5">Insurance</Typography>
                            <br></br>
                            <Typography align="left" color="inherit" variant="h6">Insurance <Button variant="outlined" color="primary">{this.state.insurance} </Button> </Typography>

                        </Paper>
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" color="primary">Proceed to Checkout</Button>
                <br></br><br></br>
                <Button variant="outlined" color="primary" href="/">Start Over</Button>
                <br></br><br></br>
                <Button variant="contained" color="secondary" onClick={this.reset}>Reset</Button>

            </div>
        );
    }
}

export default Summary;