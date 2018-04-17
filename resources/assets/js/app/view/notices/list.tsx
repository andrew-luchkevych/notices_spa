import React from 'react';
import {Component} from 'react';
import {List} from 'semantic-ui-react'
import Notice from '../../model/Notice';
import NewNotice from './newNotice';
export interface Props {
    notices : Array < Notice >;
}
export interface State {}
export default class NoticesList extends Component < Props, State > {
    renderListItems = () => {
        return this
            .props
            .notices
            .map(i => (
                <List.Item key={i.id}>
                    <List.Content>
                        <List.Header as='h5'>Rachel</List.Header>
                    </List.Content>
                </List.Item>
            ));
    }
    render() {
        return (
            <List>
                {this.renderListItems()}
            </List>
        )
    }
}