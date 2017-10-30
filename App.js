import React from 'react';
import { Root } from 'native-base';
import AppHeader from './src/components/AppHeader';
import HariBhaktList from './src/components/HariBhaktList';
import Vichran from './src/components/Vichran';

export default class App extends React.Component {


    // async componentWillMount() {
    //     await Expo.Font.loadAsync({
    //         'Roboto': require('native-base/Fonts/Roboto.ttf'),
    //         'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //     });
    // }

    render() {
        return (
            <Root>
              <AppHeader title='Sampark Families'/>
              {/*<HariBhaktList assignedKaryakar='Ashish Patel'/>*/}
              <Vichran/>
            </Root>);
    }
}