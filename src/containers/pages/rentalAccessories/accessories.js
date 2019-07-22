import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import getDataFromJson from '../../utilities/getData';
import AccessoriesRow from '../accessoriesRow';
import Grid from '@material-ui/core/Grid';


class Accessories extends Component {

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
        let indexArr = [4, 5];
        let data = getDataFromJson(indexArr);
        this.setState({ data: data });
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
                        spacing={3}>
                        <Grid item xs={10} sm={3}>
                            {this.state.data.map((acc, index) => {
                                return (
                                    <AccessoriesRow data={acc} key={index} />
                                )

                            })}
                        </Grid>
                    </Grid>
                </div>

                <br></br>
                <Button color="secondary" variant="contained" href="/">Back</Button>
                <br></br><br></br>
                <Button color="primary" variant="contained" href="/insurance">Next</Button>

            </div>

        );
    }
}

export default Accessories;