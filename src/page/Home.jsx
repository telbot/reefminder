import React from 'react';
import { connect } from 'react-redux';
import StatusTabs from './StatusTabs.jsx';
import Card from '../component/card/Card.jsx'

export const mapStateToProps = state => {
    return {

    };
};

@connect(mapStateToProps)
export default class Home extends React.Component {

    componentDidMount() {
        //this.props.dispatch(...);
    }

    render() {
        return (<div>
            <Card>
                <StatusTabs />
            </Card>
        </div>);
    }
}