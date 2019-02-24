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
                                className={`tab-heading ${index === this.state.currentTabIndex && 'tab-active'}`}
                                onClick={() => this.setState({ currentTabIndex: index }) }
                            >
                                { tab.title }
                            </button>
                        ))
                    }
                </div>
                <hr className="tab-hr" />
                {
                    tabs[this.state.currentTabIndex].content
                }
            </div>
        );
    }
}

export default TabController;