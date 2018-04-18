import React from 'react';
import {Component} from 'react';
import {Container, Grid} from 'semantic-ui-react';
import {Provider} from 'react-redux';
import Routes from './Routes';
import StoreConfig from './Store';
const store = StoreConfig();
export default class App extends Component {
    render() {
        return (
            <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 800 }}>
                    <Provider store={store}>
                        <Routes/>
                    </Provider>
                </Grid.Column>
            </Grid>
        )
    }
}