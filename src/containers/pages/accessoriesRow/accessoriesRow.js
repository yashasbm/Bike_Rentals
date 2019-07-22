import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class AccessoriesRow extends Component {

    constructor(props) {
        super(props);
        let maleBike = 1*localStorage.getItem("1");
        let femaleBike = 1*localStorage.getItem("2");
        let kidsBike = 1*localStorage.getItem("3");

        let adultBikes = (1*maleBike)+(1*femaleBike);

        this.state = {
            accessories: 0,
            adultBikes:adultBikes,
            kidsBike:kidsBike
        }

        //
        this.IncrementItem = this.IncrementItem.bind(this);
        this.DecreaseItem = this.DecreaseItem.bind(this);
        this.passData = this.passData.bind(this);
    }

    //increments the count for the accessories
    IncrementItem = () => {
        //if(this.props.data.id===4 < this.adultBikes || this.props.data.id===5 < this.kidsBike)
        this.setState({ accessories: this.state.accessories + 1 });
    }

    //decrements the count for the accessories
    DecreaseItem = () => {
        if (this.state.accessories > 0)
        this.setState({ accessories: this.state.accessories - 1 });
    }

    //stores the user selected count for each accessories
    passData() {
        localStorage.setItem(this.props.data.id, this.state.accessories);
        localStorage.setItem(this.props.data.name, this.state.price);
        console.log("name: "+ this.props.data.name + "price: " + this.props.data.price);
    }

    render() {

        return (
            <div>
                {this.props.data &&
                    <div>
                        <Paper >
                            {/* accessories image */}
                            <img src={this.props.data.image}></img>

                            {/* accessories name */}
                            <h1>{this.props.data.name}</h1>

                            {/* accessories price */}
                            <h3>Price: ${this.props.data.price}</h3>
                            <Button onClick={this.IncrementItem} color="primary" variant="outlined">+</Button>
                            <Button variant="outlined">{this.state.accessories}</Button>
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

export default AccessoriesRow;