import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Header from '../Header/Header';



class Comment extends Component {

    handlePost = () => {
                this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <Header />
                <div className="card">
                    <h2>Thank you!</h2>
                    <button onClick={this.handlePost}>Leave new feedback</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return { feedbackStorage: reduxState.feedbackStorage }
}

export default connect(mapStateToProps)(Comment);