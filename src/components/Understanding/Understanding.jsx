import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';

class Understanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understanding: 0
        }
    }

    handleSubmit = () => {
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/support')
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
                <h2 className="App">2 of 4 pages</h2>
                <div className="card">
                    <h2>How well are you understanding the content?</h2>
                    <input onChange={this.handleChange('understanding')} className="input" type="number" placeholder="Enter a number between 1 and 10" />
                    <button onClick={this.handleSubmit}>Next</button>
                </div>
            </div>
        )
    }
}

export default connect()(Understanding);