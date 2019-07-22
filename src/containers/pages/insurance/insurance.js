import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import getDataFromJson from '../../utilities/getData';
import Button from '@material-ui/core/Button';
import InsuranceRow from '../insuranceRow';


class Insurance extends Component {

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

    //fetches data from JSON file using id
    getData() {
        //Specifies which id number in the JSON array it should fetch
        let indexArr = [6];
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
                                <InsuranceRow data={rental} key={index} />
                            </Grid>

                        )
                    })}
                </Grid>
                <br></br>                
                <Button color="primary" variant="contained" href="/summary">Next</Button>
                <br></br><br></br>
                <Button color="secondary" variant="contained" href="/accesories">Back</Button>
            </div>
        );
    }
}

export default Insurance;