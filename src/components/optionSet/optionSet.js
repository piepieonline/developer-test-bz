import React, { Component } from 'react';
import './optionSet.css';

class OptionSet extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { options } = this.props;

        return options ? (
            <div className="options">
            {
                options.map(options => (
                    <div key={ options.type }>
                        <h3 className="option-header">{ options.type }</h3>
                        <select className="option-select" onChange={(e) => this.props.changeOption(options.type, e.target.value)}>
                            {
                                options.values.map((option, index) => (
                                    <option key={option.value} value={index}>{ option.value }</option>
                                ))
                            }
                        </select>
                    </div>
                ))
            }
            </div>
        ) : null;
    }
}

export default OptionSet;