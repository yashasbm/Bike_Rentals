import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Summary extends Component {


    componentDidMount(){
    }

    render() {

        let accessories = localStorage.getItem("accessories");

        return (
            <div>
                <br></br>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}>
                    <Grid item xs={10} sm={3}>
                        <Paper>
                            Accessories: {this.accessories}
                        </Paper>
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="contained" color="primary">Proceed to Payment</Button>
            </div>
        );
    }
}

export default Summary;