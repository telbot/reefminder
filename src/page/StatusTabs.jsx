import React from 'react';
import { connect } from 'react-redux';
import Tabs from '../component/tabs/Tabs.jsx';
import Tab from '../component/tabs/Tab.jsx';
import TabContent from '../component/tabs/TabContent.jsx';
import TemperatureCard from '../component/card/TemperatureCard.jsx'

export const mapStateToProps = state => {
    return {

    };
};

@connect(mapStateToProps)
export default class StatusTabs extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return (<div>
            <Tabs>
                <Tab title="Temperature" color="red">
                    <TabContent color="red">
                        <TemperatureCard />
                    </TabContent>
                </Tab>
                <Tab title="Dissolved Oxygen" color="blue">
                    <TabContent color="blue">
                        Some more tab content
                    </TabContent>
                </Tab>
                <Tab title="Water Level" color="green">
                    <TabContent color="green">
                        Some more more tab content
                    </TabContent>
                </Tab>
            </Tabs>
        </div>);
    }
}