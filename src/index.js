import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// Reducers
const feelingsReducer = (state = 0, action)=>{
    
    return state;
}

const understandingReducer = (state = 0, action)=>{
    
    return state;
}

const supportedReducer = (state = 0, action)=>{
    
    return state;
}

const commentsReducer = (state = 0, action)=>{
    
    return state;
}

// store
const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        supportedReducer, 
        understandingReducer, 
        commentsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
