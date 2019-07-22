import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class Summary extends Component {

    constructor(props) {
        //fetches localstored data of bikes
        let maleBike = 1*localStorage.getItem("1");
        let femaleBike = 1*localStorage.getItem("2");
        let kidsBike = 1*localStorage.getItem("3");

        let maleBikePrice = localStorage.getItem("Adult Male Bike");
        let femaleBikePrice = localStorage.getItem("Adult Female Bike");
        let kidsBikePrice = localStorage.getItem("Kids Unisex Bike");

        //fetches localstored data of accessories
        let adultHelmate = 1*localStorage.getItem("4");
        let kidsHelamte = 1*localStorage.getItem("5");

        let adultHelamtePrice = localStorage.getItem("Adult Unisex Helmet");
        let kidsHelamtePrice = localStorage.getItem("Kids Unisex Helmet");


        //fetches localstored data of insurance
        let insurance = 1*localStorage.getItem("6");

        let insurancePrice = localStorage.getItem("Insurance");

        //calculates the total of the order
        let total = ((1*maleBike * maleBikePrice) + (1*femaleBike * femaleBikePrice) + (1*kidsBike * kidsBikePrice) + (1*adultHelmate * 4) + (1*kidsHelamte * 3.5) + (1*insurance * insurancePrice))


        super(props);
        this.state = {
            maleBike: maleBike,
            femaleBike: femaleBike,
            kidsBike: kidsBike,
            adultHelmate: adultHelmate,
            kidsHelamte: kidsHelamte,
            insurance: insurance,
            total: total,
            data: []
        }
        this.reset = this.reset.bind();
    }


    //clears localstorage and reloads the page for new values
    reset() {
        localStorage.clear();
        window.location.reload();
    }

    render() {

        return (
            <div>
                <br></br>
                <Typography color="secondary" variant="h3">Review Order</Typography>
                <br></br>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}
                    p={1}>
                    <Grid item xs={10} sm={4}>
                        <Paper>
                            <Typography align="center" color="primary" variant="h4">NYC Bike Rentals</Typography>
                            <br></br>
                            <Grid container>

                                {/* displayes bikes, accessories and insurance */}
                                <Grid item sm xs>
                                    <Typography color="inherit" variant="h6">Adult Male Bike </Typography>
                                    <Typography color="inherit" variant="h6">Adult Female Bike </Typography>
                                    <Typography color="inherit" variant="h6">Unisex Kids Bike </Typography>
                                    <br></br>

                                    <Typography color="inherit" variant="h6">Adult Helmet </Typography>
                                    <Typography color="inherit" variant="h6">Kids helmet </Typography>
                                    <br></br>

                                    <Typography color="inherit" variant="h6">Insurance </Typography>

                                </Grid>

                                {/* displayes user selected quantities of the products */}
                                <Grid item sm xs>
                                    <Typography color="primary" variant="h6">{this.state.maleBike}</Typography>
                                    <Typography color="primary" variant="h6">{this.state.femaleBike}</Typography>
                                    <Typography color="primary" variant="h6">{this.state.kidsBike}</Typography>
                                    <br></br>

                                    <Typography color="primary" variant="h6">{this.state.adultHelmate}</Typography>
                                    <Typography color="primary" variant="h6">{this.state.kidsHelamte}</Typography>
                                    <br></br>

                                    <Typography color="primary" variant="h6">{this.state.insurance}</Typography>
                                </Grid>


                            </Grid>
                        </Paper>
                    </Grid>

                    {/* order price section */}
                    <Grid item xs={10} sm={3}>
                        <Paper>
                            <Typography color="primary" variant="h4">Order Summary</Typography>
                            <br></br>
                            <Grid container>

                                {/* displayes order total text */}
                                <Grid item sm xs>
                                    <Typography color="inherit" variant="h6">Regular Price</Typography>
                                    <br></br>
                                    <Typography color="inherit" variant="h5">Order Total</Typography>
                                </Grid>

                                {/* displayes order total price */}
                                <Grid item sm xs>
                                    <Typography color="primary" variant="h5">${this.state.total}</Typography><br></br>
                                    <Typography color="primary" variant="h5">${this.state.total}</Typography>
                                </Grid>
                            </Grid>

                            {/* input filed for users to signup */}
                            <br></br>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-name"
                                label="First Name"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-name"
                                label="Last Name"
                                margin="normal"
                                variant="outlined"
                            />
                        </Paper>
                    </Grid>
                </Grid>

                <br></br><br></br>

                {/* dummy button */}
                <Button variant="contained" color="primary">Proceed to Checkout</Button>
                <br></br><br></br>

                {/* reset button to clear all user selected quantities */}
                <Button variant="outlined" color="secondary" onClick={this.reset} >Reset</Button>

            </div>
        );
    }
}

export default Summary;