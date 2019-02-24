import React, { Component } from 'react';
import './tabController.css';

class TabController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTabIndex: 0
        };
    }

    render() {
        const tabs = this.props.tabs;

        return (
            <div>
                <div>
                    {
                        tabs.map((tab, index) => (
                            <button
                                key={tab.title}
                                onClick={() => this.setState({ currentTabIndex: index }) }
                            >
                                { tab.title }
                            </button>
                        ))
                    }
                </div>
                <div>
                    {
                        tabs[this.state.currentTabIndex].content
                    }
                </div>
            </div>
        );
    }
}

export default TabController;