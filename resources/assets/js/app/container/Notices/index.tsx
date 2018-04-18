import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Notice from '../../model/Notice';
import View from '../../view/notices';
import * as NoticeActions from '../../reducers/actions/notice';
export interface Props {
    addNotice?: Function;
    getNotices?: Function;
    loadNotices?: Function;
    notices : Array < Notice >;
};
export interface State {};
class Notices extends Component < Props, State > {
    componentDidMount() {
        if (this.props.loadNotices) 
            this.props.loadNotices()
    }
    componentWillReceiveProps(props) {
        console.log(props);
    }
    render() {
        return <View notices={this.props.notices} onSave={this.props.addNotice}/>
    }
}

export default connect(state => state, dispatch => bindActionCreators(NoticeActions, dispatch))(Notices);