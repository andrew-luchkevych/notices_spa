import React from 'react';
import {Component} from 'react';
import Notice from '../../model/Notice';
import View from '../../view/notices';
import {connect} from 'react-redux';
export interface Props {
    notices : Array < Notice >;
};
export interface State {};
class Notices extends Component < Props, State > {
    save = (text) => {}
    render() {
        return <View notices={this.props.notices} onSave={this.save}/>
    }
}

export default connect((state) => state.notices)(Notices)