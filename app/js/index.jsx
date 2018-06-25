'use strict';

/**
 * Depecdencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import Modal from 'react-modal';

import injectTapEventPlugin from 'react-tap-event-plugin'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import '../styles/style.css'

import store from './store'
import App from '../components/app.jsx'

/**
 * Tap Event
 * @ignore
 */
injectTapEventPlugin();


Modal.setAppElement('#app');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
