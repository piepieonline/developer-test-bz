import React, { Component } from 'react';
import './optionSet.css';

class OptionSet extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { options } = this.props;

        return (
            <div className="options">
            {
                options.map(options => (
                    <div key={ options.type }>
                        <h3>{ options.type }</h3>
                        <select>
                            {
                                options.values.map(option => (
                                    <option key={option.value}>{ option.value }</option>
                                ))
                            }
                        </select>
                    </div>
                ))
            }
            </div>
        );
    }
}

export default OptionSet;