import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class InsuranceRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            insurance: 0
        }
        this.IncrementItem = this.IncrementItem.bind(this);
        this.DecreaseItem = this.DecreaseItem.bind(this);
        this.passData = this.passData.bind(this);
    }

    //increments the count for the insurance
    IncrementItem() {
        this.setState({ insurance: this.state.insurance + 1 });
    }
    
    //decrements the count for the insurance
    DecreaseItem() {
        if (this.state.insurance > 0)
            this.setState({ insurance: this.state.insurance - 1 });
    }

    //stores the user selected count for each insurance
    passData() {
        localStorage.setItem(this.props.data.id, this.state.insurance);
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