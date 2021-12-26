import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export const initStore = (initStore = {})=> createStore(reducer, initialState, applyMiddleware(thunk))

