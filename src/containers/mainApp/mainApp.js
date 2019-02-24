import React, { Component } from 'react';

import ProductImageBlack from '../../assets/ath-msr7-black.jpg';
import ProductImageBrown from '../../assets/ath-msr7-brown.jpg';

import TabController from '../../components/tabController/tabController';
import ItemPrice from '../../components/itemPrice/itemPrice';
import OptionSet from '../../components/optionSet/optionSet';
import CartButton from '../../components/cartButton/cartButton';

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
                        Description Lorem ipsum. Sed ultrices ornare nisl id fermentum. Morbi auctor nisl ac aliquam tempus. Nam mollis odio vel finibus placerat. Morbi sit amet leo eget odio venenatis sollicitudin. Sed sed congue magna, eget volutpat dolor. Donec facilisis mollis ante nec lacinia. Sed eleifend dictum est, ut fringilla leo gravida quis. Donec efficitur bibendum eros, eu lobortis nunc maximus ut. Maecenas suscipit eleifend bibendum. Mauris et pellentesque purus. Curabitur in nisl eu diam euismod mollis. Donec tincidunt dapibus sapien, sed commodo metus semper eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet augue eget eleifend ultrices. Etiam faucibus eu felis sit amet tincidunt.
                </div>)
                },
                {
                    title: 'Details',
                    content: (<div>
                        Details Lorem ipsum. Morbi nec velit non ligula tristique vulputate et eget neque. Vivamus tincidunt turpis a pretium accumsan. Donec consectetur, felis eu pretium maximus, libero nulla eleifend leo, sit amet aliquet lacus eros vel nisi. Donec nisl mauris, scelerisque in nunc et, fermentum fringilla odio. Curabitur arcu enim, molestie non bibendum suscipit, iaculis in urna. Vestibulum mollis odio sit amet nunc tincidunt, nec porta est volutpat. Donec id sem a massa eleifend iaculis. Duis a velit efficitur, rhoncus quam sit amet, efficitur risus. Cras nec elit non ipsum sollicitudin pretium. In egestas suscipit dui nec maximus. Donec et ipsum ornare, rhoncus risus at, ultrices ligula. Nulla cursus leo nec condimentum convallis.
                </div>)
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
        };

        this.state = {};
    }

    render() {
        return (
            <div className="product-view">
                <div className="header">
                    { /* This link is intentionally invalid, due to the demonstration nature of this page  */}
                    <a href="#">🡐 All products</a> { /* eslint-disable-line jsx-a11y/anchor-is-valid */}
                </div>
                <header className="item-header">
                    <h1>{ this.content.title }</h1>
                    <span className="item-header-subtitle">{ this.content.subtitle }</span>
                </header>
                <div className="item-detail">
                    <TabController tabs={this.content.tabs} />
                    <ItemPrice price={this.content.prices.standard} salePrice={this.content.prices.sale} />
                    <OptionSet options={this.content.options} />
                </div>
                <div className="cart-controls">
                    <hr />
                    <CartButton />
                </div>
                <img className="product-image" src={ProductImageBlack} alt="Product" />
            </div>
        )
    }
}

export default MainApp;