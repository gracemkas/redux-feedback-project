import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            support: 0
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
                <h2>3 of 4 pages</h2>
                <div className="card">
                    <h2>How well are you being supported?</h2>
                    <input onChange={this.handleChange('support')} className="input" type="number" placeholder="Enter a number between 1 and 10"/>
                    <button onClick={() => this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state.support})}>Next</button>
                </div>
            </div>
        )
    }
}

export default connect()(Support);