import React, { Component } from 'react';
import './itemPrice.css';

class ItemPrice extends Component {
    render() {
        const { salePrice, price } = this.props;

        return (
            <div>
                <span className="price">${ salePrice }</span>
                <span className={`price ${ salePrice && 'on-sale'}`}>${ price }</span>
            </div>
        );
    }
}

export default ItemPrice;