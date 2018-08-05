import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import axios from 'axios';


class Comment extends Component {

    // componentDidMount() {
        handlePost = () => {
            axios.post('/api/feedback', this.props.feedbackStorage)
                .then(response => {
                    //   this.props.history.push('/garage')
                    console.log('response from router', response);

                }).catch((err) => {
                    console.log(err);

                })
        }
    // }

    render() {
        return (
            <div>
                <div className="card">
                    <h2>Thank you!</h2>
                    <button onClick={this.handlePost}>Leave new feedback</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {feedbackStorage: reduxState.feedbackStorage}
  }

export default connect(mapStateToProps)(Comment);