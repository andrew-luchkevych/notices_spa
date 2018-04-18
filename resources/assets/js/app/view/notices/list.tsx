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
            .sort((a, b) => (b.id - a.id))
            .map(notice => (
                <List.Item key={notice.id} style={{padding: 20}}>
                    <List.Content>
                        <List.Header as='h5'>{notice.created_at}</List.Header>
                        <List.Description style={{textAlign: 'left'}}>
                            {notice.text}    
                        </List.Description>
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