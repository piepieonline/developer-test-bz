import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './containers/mainApp/mainApp';

import ProductImageBlack from './assets/ath-msr7-black.jpg';
import ProductImageBrown from './assets/ath-msr7-brown.jpg';

ReactDOM.render(<MainApp content={
    {
        title: 'Audio-Technica ATH-MSR7',
        subtitle: '2017 Best Headphones of the Year Award Winner',
        prices: {
            standard: '89.99',
            sale: '59.99'
        },
        tabs: [
            {
                title: 'Description',
                content: (<p>
                    Description Lorem ipsum. Sed ultrices ornare nisl id fermentum. Morbi auctor nisl ac aliquam tempus. Nam mollis odio vel finibus placerat. Morbi sit amet leo eget odio venenatis sollicitudin. Sed sed congue magna, eget volutpat dolor. Donec facilisis mollis ante nec lacinia. Sed eleifend dictum est, ut fringilla leo gravida quis. Donec efficitur bibendum eros, eu lobortis nunc maximus ut. Maecenas suscipit eleifend bibendum. Mauris et pellentesque purus. Curabitur in nisl eu diam euismod mollis.
            </p>)
            },
            {
                title: 'Details',
                content: (<p>
                    Details Lorem ipsum. Morbi nec velit non ligula tristique vulputate et eget neque. Vivamus tincidunt turpis a pretium accumsan. Donec consectetur, felis eu pretium maximus, libero nulla eleifend leo, sit amet aliquet lacus eros vel nisi. Donec nisl mauris, scelerisque in nunc et, fermentum fringilla odio. Curabitur arcu enim, molestie non bibendum suscipit, iaculis in urna. Vestibulum mollis odio sit amet nunc tincidunt, nec porta est volutpat. Donec id sem a massa eleifend iaculis.
            </p>)
            }
        ],
        options: [
            {
                type: 'Colours',
                values: [
                    {
                        value: 'Black',
                        productImage: ProductImageBlack
                    },
                    {
                        value: 'Brown',
                        productImage: ProductImageBrown
                    }
                ]
            }
        ]
    }
} />, document.getElementById('root'));

