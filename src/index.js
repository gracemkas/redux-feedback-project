import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackStorage = (state =
    {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: '',
        flagged: '',
        date: ''
    }, action) => {
    switch (action.type) {
        // ...state,
        case 'ADD_FEELING':
            return {
                feeling: action.payload
            };
        case 'ADD_UNDERSTANDING':
            return {
                ...state,
                understanding: action.payload
            };
        case 'ADD_SUPPORT':
            return {
                ...state,
                support: action.payload
            };
        case 'ADD_COMMENT':
            return {
                ...state,
                comments: action.payload
            };
        // case 'CLEAR_ORDER':
        //     return state = {};
        default:
            return state;
    }
}


const storeInstance = createStore(
    combineReducers({
        feedbackStorage

    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
