import React, { Component } from 'react';
import './itemPrice.css';

class ItemPrice extends Component {
    render() {
        const { salePrice, price } = this.props;
        
        let mainPrice = salePrice || price;

        return (
            <div className="price-container">
                <span className="price">${ mainPrice }</span>
                {
                    salePrice && (<span className={`price ${ salePrice && 'on-sale'}`}>${ price }</span>)
                }
            </div>
        );
    }
}

export default ItemPrice;