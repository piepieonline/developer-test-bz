import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './containers/mainApp/mainApp';

import ProductJSON from './assets/product.json';

ReactDOM.render(<MainApp content={ProductJSON} />, document.getElementById('root'));

