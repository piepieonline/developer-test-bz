import React, { Component } from 'react';
import './cartButton.css';

class CartButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            callToAction: {
                disabled: false,
                label: 'Add to Cart'
            },
            popupOpacity: 0,
            orderComplete: false
        };
    }

    setToLoading = () => new Promise((resolve) => {
        const ORDER_COMPLETE_TIME = 2000;
        
        this.setState({
            callToAction: {
                disabled: true,
                label: 'Loading...'
            }
        }, () => {
            window.setTimeout(() => resolve(), ORDER_COMPLETE_TIME)
        });
    });

    setToViewCart = () => {
        const POPUP_DISPLAY_TIME = 5000;
        
        // Show the popup, and automatically hide it after a set period

        this.setState({
            callToAction: {
                disabled: false,
                label: 'View Cart'
            },
            popupOpacity: 1,
            orderComplete: true
        });

        window.setTimeout(() => {
            this.setState({
                popupOpacity: 0
             });
        }, POPUP_DISPLAY_TIME);
    };

    render() {
        return (
            <div className="cart-button-container">
                <input
                    type="button"
                    className="cart-button"
                    value={this.state.callToAction.label}
                    disabled={this.state.callToAction.disabled}
                    onClick={() => {
                        if(!this.state.orderComplete) {
                            this.setToLoading().then(this.setToViewCart)
                        }
                    }}
                />
                <div className="cart-button-status-popup" style={{ opacity: this.state.popupOpacity }}>
                    <span className="cart-button-status">Item added to cart!</span>
                </div>
            </div>
        );
    }
}

export default CartButton;
