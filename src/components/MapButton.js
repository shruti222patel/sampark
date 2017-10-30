import React, {Component} from 'react';
import {Linking} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MapButton extends Component {

    constructor(props) {
        super(props);
        this.openMaps = this.openMaps.bind(this);
    }

    openMaps() {

        // Get Maps link
        var mapsUrl = 'https://www.google.com/maps/dir/?api=1&destination='
            // + encodeURIComponent('3725 Applewood Rd, Richmond, VA 23234')
            +encodeURIComponent(this.props.destination)
            + '&travelmode=driving&dir_action=navigate';
        console.log(mapsUrl);

        return Linking.openURL(mapsUrl);
    }

    render() {
        return (
            <Icon name='map-marker' style={{flex: 1}} onPress={this.openMaps} size={35} color={this.props.color}>
            </Icon>
        );
    }
}