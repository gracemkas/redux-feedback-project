import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
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

    handleSubmit = () => {
        // event.preventDefault();
        this.props.dispatch({type: 'ADD_COMMENT', payload: this.state.comments});
    }


    render() {
        return (
            <div>
                <h2>4 of 4 pages</h2>
                <div className="card">
                    <h2>Any comments you want to leave?</h2>
                    <input onChange={this.handleChange('comments')} className="input" type="text" placeholder="Comment"/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}



export default connect()(Comment);