import React, { Component } from 'react';
import FeelingCSS from './Feelings.css';

class Feelings extends Component {
    constructor(props) {
        super(props);
    }
    // handleClick = () => {
    //     console.log('clicked');
    //         this.setState({
    //             isVisible : !this.state.isVisible
    //         })
    // }

    render() {
        return (
            <div>
                <h2>1 of 4 pages</h2>
                <div className="card">
                    <h2>How are you feeling today?</h2>
                    <input type="number" placeholder="Enter a number between 1 and 10"/>
                    <button onClick={this.handleDelete}>Next</button>
                </div>
            </div>
        )
    }
}

export default Feelings;