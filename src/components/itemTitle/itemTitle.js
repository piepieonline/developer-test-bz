import React, { Component } from 'react';
import './itemTitle.css';

class ItemTitle extends Component {
    render() {
        return (
            <header className="item-title">
                <h1 className="item-title-heading">{ this.props.title }</h1>
                <span className="item-title-subtitle">{ this.props.subtitle }</span>
            </header>
        );
    }
}

export default ItemTitle;