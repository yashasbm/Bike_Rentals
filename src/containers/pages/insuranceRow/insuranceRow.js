import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class InsuranceRow extends Component {

    constructor(props) {
        super(props);

        //fetching user selected bikes quantity
        let maleBike = 1*localStorage.getItem("1");
        let femaleBike = 1*localStorage.getItem("2");
        let kidsBike = 1*localStorage.getItem("3");

        //calculates the total number of bikes user has selected
        let totalBikes = (1*maleBike)+(1*femaleBike)+(1*kidsBike);

        //fetches insurance if not cleared
        let insurance = 1*localStorage.getItem("6");
        this.state = {
            insurance: insurance,
            totalBikes:totalBikes
        }
        this.IncrementItem = this.IncrementItem.bind(this);
        this.DecreaseItem = this.DecreaseItem.bind(this);
        this.passData = this.passData.bind(this);
    }

    //increments the count for the insurance
    IncrementItem() {
        //sets the maximum number of insurance selection to the total number of bikes taken
        if(this.state.insurance < this.state.totalBikes)
        this.setState({ insurance: this.state.insurance + 1 });
        else
        alert("You are trying to insure more bikes than you have selected!");
    }
    
    //decrements the count for the insurance
    DecreaseItem() {
        if (this.state.insurance > 0)
            this.setState({ insurance: this.state.insurance - 1 });
    }

    //stores the user selected count for each insurance
    passData() {
        localStorage.setItem(this.props.data.id, this.state.insurance);
        localStorage.setItem(this.props.data.name, this.props.data.price);
    }


    render() {


        return (
            <div>
                {this.props.data &&
                    <div>
                        <Paper >
                            {/* insurance image */}
                            <img src={this.props.data.image}></img>

                            {/* insurance name */}
                            <h1>{this.props.data.name}</h1>

                            {/* insurance price */}
                            <h3>Price: ${this.props.data.price}</h3>
                            <Button onClick={this.IncrementItem} color="primary" variant="outlined">+</Button>
                            <Button variant="outlined">{this.state.insurance}</Button>
                            <Button onClick={this.DecreaseItem} color="secondary" variant="outlined">-</Button>
                            <br></br><br></br>
                            <Button variant="outlined" color="primary" onClick={this.passData}>Add</Button>
                        </Paper>
                    </div>
                }
                <br></br>
            </div>
        );
    }
}

export default InsuranceRow;