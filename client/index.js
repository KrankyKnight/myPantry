/*
@module index.js
@description App entry point
*/

import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import store from './store.js'
import styles from './scss/styles.scss'

const domNode = document.getElementById('root')
const root = createRoot(domNode);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)