import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from 'native-base';
import AppNavigator from './src/components/AppNavigator';
import AppHeader from './src/components/AppHeader';
import HariBhaktList from './src/components/HariBhaktList';

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
              <HariBhaktList assignedKaryakar='Akshar Rawal'/>
            </Root>);
        // return (
        //   <View style={styles.container}>
        //       <AppHeader title='HariBhakt List'/>
        //       <HariBhaktList/>
        //   </View>
        // );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
