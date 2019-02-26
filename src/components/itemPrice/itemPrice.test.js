import React from 'react';
import ReactDOM from 'react-dom';
import ItemPrice from './itemPrice';

it('renders the expected HTML (no sale price)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemPrice price="10.00" />, div);

    expect(div).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(div);
});

it('renders the expected HTML (sale price)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemPrice price="10.00" salePrice="5.00" />, div);

    expect(div).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(div);
});