import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackStorage = (state = 
                            {feeling: 0, 
                            understanding: 0, 
                            support: 0, 
                            comments: '',
                            flagged: '',
                            date: ''}, action) =>{
    switch(action.type){
    case 'ADD_FEELING':
        return { ...state,
                feeling: [...state.feeling, action.payload],
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
