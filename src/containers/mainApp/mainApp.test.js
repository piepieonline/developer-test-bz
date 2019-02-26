import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './mainApp';

import ProductJSON from '../../assets/product.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp content={ProductJSON} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
