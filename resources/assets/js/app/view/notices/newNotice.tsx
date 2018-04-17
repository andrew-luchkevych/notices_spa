import React from 'react';
import {Component} from 'react';
import {Grid, Form} from 'semantic-ui-react'
import Notice from '../../model/Notice';
export interface Props {
    onSave : Function
}
export interface State {
    notice : string;
}
export default class NewNotice extends Component < Props,
State > {
    save = () => {
        this
            .props
            .onSave(this.state.notice);
        this.setState({notice: ''});
    }
    render() {
        return (
            <Grid.Column>
                <Form>
                    <Form.Group>
                        <Form.Input
                            placeholder='Enter notice'
                            onChange={evt => this.setState({notice: evt.currentTarget.value})}
                            style={{
                            width: 300
                        }}/>
                        <Form.Button onClick={this.save}>Add</Form.Button>
                    </Form.Group>
                </Form>
            </Grid.Column>
        )
    }
}