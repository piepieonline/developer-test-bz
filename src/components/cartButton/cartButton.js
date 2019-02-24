import React, { Component } from 'react';
import './cartButton.css';

class CartButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            callToAction: {
                disabled: false,
                label: 'Add to Cart'
            }
        };
    }

    render() {
        return (
            <input
                type="button"
                className="cart-button"
                value={this.state.callToAction.label}
                disabled={this.state.callToAction.disabled}
                onClick={() => {
                    this.setState({
                        callToAction: {
                            disabled: true,
                            label: 'Loading...'
                        }
                    });
                    window.setTimeout(() => {
                        this.setState({
                            callToAction: {
                                disabled: false,
                                label: 'View Cart'
                            }
                        });
                    }, 2000)
                }}
            />
        );
    }
}

export default CartButton;
