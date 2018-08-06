import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import axios from 'axios';


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feeling: this.props.feedbackStorage.feeling,
            understanding: this.props.feedbackStorage.understanding,
            support: this.props.feedbackStorage.support,
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
        // this.props.dispatch({type: 'ADD_COMMENT', payload: this.state.comments})
        axios.post('/api/feedback', this.state)
        .then(response => {
            this.props.history.push('/thankyou')
            console.log('response from router', response);

        }).catch((err) => {
            console.log(err);

        })
    }


    render() {
        return (
            <div>
                <Header />
                <h2 className="App">4 of 4 pages</h2>
                <div className="card">
                    <h2>Any comments you want to leave?</h2>
                    <input onChange={this.handleChange('comments')} className="input" type="text" placeholder="Comment"/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return { feedbackStorage: reduxState.feedbackStorage }
}


export default connect(mapStateToProps)(Comment);