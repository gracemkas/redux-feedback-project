import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const firstReducer = (state = [], action) =>{
    // switch(action.type){
    // case 'ADD_PIZZA':
    //     return { ...state,
    //             pizzas: [...state.pizzas, action.payload],
    //             order_total: state.order_total + action.payload.cost
    //         };
    // case 'CLEAR_ORDER':
    //     return state = {};
    // default:
    //     return state;
    // }
    return state
}


const storeInstance = createStore(
    combineReducers({
           firstReducer

    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
