import React from 'react';
import ReactDOM from 'react-dom';
import CartButton from './cartButton';

it('renders the expected HTML', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CartButton />, div);

    expect(div).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(div);
});