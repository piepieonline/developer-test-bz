import React from 'react';
import ReactDOM from 'react-dom';
import OptionSet from './optionSet';

const oneOption = [
    {
        "type": "Colors",
        "values": [
            {
                "value": "Black",
                "productImage": "./assets/ath-msr7-black.jpg"
            },
            {
                "value": "Brown",
                "productImage": "./assets/ath-msr7-brown.jpg"
            }
        ]
    }
];

it('renders the expected HTML when empty', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OptionSet />, div);

    expect(div).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(div);
});

it('renders the expected HTML when filled with one option (Colours)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OptionSet options={oneOption} />, div);

    expect(div).toMatchSnapshot();

    ReactDOM.unmountComponentAtNode(div);
});