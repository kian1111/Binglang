import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';



export default function newStore(rootReducer, initialState)
{
    let middleware = [thunk];
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}