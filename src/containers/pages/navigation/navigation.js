import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Rental extends Component {

    

    render() {

        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Bike Rentals - NYC
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Rental;