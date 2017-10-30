import React, {Component} from 'react';
import { Text} from 'react-native';
import {Content, List, ListItem, Right, Left, Separator} from 'native-base';
import MapButton from './MapButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SamparkFamilyListItem extends Component {

    constructor(props) {
        super(props);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.state = {isComplete:false};
    }

    toggleComplete() {
        this.setState({isComplete: ! this.state.isComplete});
    }

    render() {
        var liStyle = {marginLeft: 0, paddingLeft: 17};
        var nameStyle = {fontSize:18};
        if (this.state.isComplete) {
            liStyle['backgroundColor'] = '#e8e8ee';
            nameStyle['textDecorationLine'] = 'line-through';
        }

        var isCompleteIcon = this.state.isComplete
            ? <Icon name='check-circle' size={35} color='green' onPress={this.toggleComplete} ></Icon>
            : <Icon name='check-circle-o' size={35} color='green' onPress={this.toggleComplete}></Icon>


        return (
            <ListItem style={liStyle}>
                <Left>
                    <Text style={nameStyle}>{this.props.name}</Text>
                </Left>
                <Right style={{flexDirection: 'row'}}>
                    <MapButton  destination={this.props.address} color='#bf0000'></MapButton>
                    {isCompleteIcon}

                </Right>
            </ListItem>);

    }
}
