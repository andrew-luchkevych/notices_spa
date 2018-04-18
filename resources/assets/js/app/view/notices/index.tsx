import React from 'react';
import {Component} from 'react';
import {Container, Header} from 'semantic-ui-react'
import Notice from '../../model/Notice';
import NewNotice from './newNotice';
import NoticeList from './list';
export interface Props {
    notices : Array < Notice >;
    onSave: Function;
}
export interface State {}
export default class Notices extends Component<Props, State> {
    render() {
        return (
            <Container fluid style={{marginTop: 20, marginBottom: 20}}>
                <Header>Notices SPA</Header>
                <NewNotice onSave={this.props.onSave} />
                <NoticeList notices={this.props.notices} key="notice_list"/>
            </Container>
        )
    }
}