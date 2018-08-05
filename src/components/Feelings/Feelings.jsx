import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: 0
        }
    }

    handleChange = (propertyName) => {
        return (event) => {
            this.setState({
                ...this.state,
                [propertyName]: event.target.value
            });
        }
      }

    render() {
        return (
            <div>
                <h2>1 of 4 pages</h2>
                <div className="card">
                    <h2>How are you feeling today?</h2>
                    <input onChange={this.handleChange('feeling')} className="input" type="number" placeholder="Enter a number between 1 and 10"/>
                    <button onClick={() => this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling})}>Next</button>
                </div>
            </div>
        )
    }
}

export default connect()(Feelings);