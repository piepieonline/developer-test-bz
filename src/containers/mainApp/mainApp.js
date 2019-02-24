import React, { Component } from 'react';

import ProductImageBlack from '../../assets/ath-msr7-black.jpg';
import ProductImageBrown from '../../assets/ath-msr7-brown.jpg';

import TabController from '../../components/tab-controller/tabController';
import ItemPrice from '../../components/item-price/itemPrice';
import OptionSet from '../../components/optionSet/optionSet';

import './mainApp.css';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.content = {
            title: 'Audio-Technica ATH-MSR7',
            subtitle: '2017 Best Headphones of the Year Award Winner',
            prices: {
                standard: '89.99',
                sale: '59.99'
            },
            tabs: [
                {
                    title: 'Description',
                    content: (<div>
                        Description Lorem ipsum. Phasellus aliquet ac elit quis tempor. Morbi cursus rutrum porttitor. Phasellus lacus sem, aliquet id est et, varius elementum nisi. Vestibulum sagittis arcu et maximus semper. Mauris malesuada odio sed neque bibendum, id egestas odio tempus. Mauris condimentum rhoncus lorem sit amet tempor.
                </div>)
                },
                {
                    title: 'Details',
                    content: (<div>
                        Details Lorem ipsum. Sed ultrices ornare nisl id fermentum. Morbi auctor nisl ac aliquam tempus. Nam mollis odio vel finibus placerat. Morbi sit amet leo eget odio venenatis sollicitudin. Sed sed congue magna, eget volutpat dolor. Donec facilisis mollis ante nec lacinia. Sed eleifend dictum est, ut fringilla leo gravida quis.
                </div>)
                }
            ],
            options: [
                {
                    type: 'Colour',
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
    }

    render() {
        return (
            <div>
                { /* This link is intentionally invalid, due to the demonstration nature of this page  */}
                <a href="#">&lt; All products</a> { /* eslint-disable-line jsx-a11y/anchor-is-valid */}
                <header>
                    <h1>{ this.content.title }</h1>
                    <span>{ this.content.subtitle }</span>
                </header>
                <div className="content">
                    <TabController tabs={this.content.tabs} />
                    <ItemPrice price={this.content.prices.standard} salePrice={this.content.prices.sale} />
                    <OptionSet options={this.content.options} />
                </div>
                <input type="button" value="Add to cart" />
                <img src={ProductImageBrown} alt="Product" />
            </div>
        )
    }
}

export default MainApp;