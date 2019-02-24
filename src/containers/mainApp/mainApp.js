import React, { Component } from 'react';

import TabController from '../../components/tabController/tabController';
import ItemPrice from '../../components/itemPrice/itemPrice';
import OptionSet from '../../components/optionSet/optionSet';
import CartButton from '../../components/cartButton/cartButton';

import './mainApp.css';
import ItemTitle from '../../components/itemTitle/itemTitle';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedImage: this.props.content.options.filter((option) => option.type === 'Colours')[0].values[0].productImage
        };
    }

    selectImage = (type, colourVariantIndex) => {
        this.setState({
            selectedImage: this.props.content.options.filter((option) => option.type === type)[0].values[colourVariantIndex].productImage
        });
    }

    render() {
        return (
            <div className="product-view">
                <div className="product-view-grid">
                    <div className="header">
                        { /* This link is intentionally invalid, due to the demonstration nature of this page  */}
                        <a href="#" className="back-link">All products</a> { /* eslint-disable-line jsx-a11y/anchor-is-valid */}
                    </div>
                    <div className="item-header">
                        <ItemTitle title={this.props.content.title} subtitle={this.props.content.subtitle} />
                    </div>
                    <div className="item-details">
                        <TabController tabs={this.props.content.tabs} />
                        <ItemPrice price={this.props.content.prices.standard} salePrice={this.props.content.prices.sale} />
                        <OptionSet options={this.props.content.options} changeOption={(type, value) => {
                            this.selectImage(type, value);
                        }} />
                    </div>
                    <div className="cart-controls">
                        <hr />
                        <CartButton />
                    </div>
                    <div className="product-image-container">
                        <img className="product-image" src={this.state.selectedImage} alt="Product" />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainApp;