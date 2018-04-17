import React from 'react';
import {Component} from 'react';
import {Container, Grid} from 'semantic-ui-react';
import {Provider} from 'react-redux';
import Routes from './Routes';
export default class App extends Component {
    render() {
        return (
            <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Provider>
                        <Routes/>
                    </Provider>
                </Grid.Column>
            </Grid>
        )
    }
}