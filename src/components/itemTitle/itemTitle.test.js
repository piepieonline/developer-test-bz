import React from 'react';
import ReactDOM from 'react-dom';
import ItemTitle from './itemTitle';

it('renders the expected HTML', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemTitle title="title" subtitle="subtitle" />, div);

    expect(div).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(div);
});