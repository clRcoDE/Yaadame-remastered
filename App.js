/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React ,{Component} from 'react';
import AppContainer from './src/routes'
import {createStore ,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './src/services/index'
export const store = createStore(reducer , applyMiddleware(thunk))
export default class App extends Component{
  render() {
    
    return (
    <Provider store={store}>
    <AppContainer/>
    </Provider>);
  }
}

