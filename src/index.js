import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Canvas from './Canvas';
import * as serviceWorker from './serviceWorker';

import { Amplify } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(<Canvas />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
