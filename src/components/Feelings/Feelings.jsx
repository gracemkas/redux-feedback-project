import React, { Component } from 'react';
import Header from '../Header/Header';
import '../App/App.css';
import { connect } from 'react-redux';

class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: 0
        }
    }

    handleSubmit = () => {
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state.feeling})
        this.props.history.push('/understanding')
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
                <Header />
                <h2 className="App">1 of 4 pages</h2>
                <div className="card">
                    <h2>How are you feeling today?</h2>
                    <input onChange={this.handleChange('feeling')} className="input" type="number" placeholder="Enter a number between 1 and 10"/>
                    <button onClick={this.handleSubmit}>Next</button>
                </div>
            </div>
        )
    }
}

export default connect()(Feelings);