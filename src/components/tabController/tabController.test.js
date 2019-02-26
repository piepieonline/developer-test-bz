import React from 'react';
import ReactDOM from 'react-dom';
import TabController from './tabController';

const testTabs = [
    {
        "title": "Description",
        "content": "Description."
    },
    {
        "title": "Details",
        "content": "Details."
    }
];

it('renders the expected HTML', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TabController tabs={testTabs} />, div);

    expect(div).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(div);
});