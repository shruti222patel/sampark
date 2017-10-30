import React, {Component} from 'react';
import { Text, AsyncStorage } from 'react-native';
import {Content, List, ListItem, Right, Left, Separator} from 'native-base';
import SamparkFamilyListItem from './SamparkFamilyListItem';
class Vichran extends Component {

    constructor(props) {
        super(props);
        // this.setState({list_items: []});
        this.state = {familyToVisitData:{}, familyVisitedData:{}};
        this.toggleDone = this.toggleDone.bind(this);
    }


    componentWillMount() {
        console.log('inside vichran componentWillMount');
        // TODO: update the url
        fetch('https://spreadsheets.google.com/feeds/list/1XXa4c6gL7PvdyunRV5IkpWp4clyzx5EtHKn9g6FailU/1/public/basic?alt=json')
            .then((response) => response.json())
            .then((json)=>{
                console.log('Try promise ', json.length);

                // Get list of unique separators
                var familyToVisitData = {};

                // Get List Items
                json.feed.entry.forEach(e => {

                    // Get List Item
                    var zone = e.title.$t;
                    var data = e.content.$t.split(/[a-z]*:/);

                    data = data.map(d => {
                        return d.replace(/^\s+|\s+$|,\s+$/g,'');
                    });

                    console.log(data);


                    if (zone in familyToVisitData) {
                        familyToVisitData[zone].push(data);
                    } else {
                        familyToVisitData[zone] = new Array(data);
                    }

                });

                this.setState({familyToVisitData:familyToVisitData, familyVisitedData:{}})


            }).catch((error) => {
            console.error(error);
        });
    }


    toggleDone() {

    }


    generateListItems(dataList) {

        var listItems = [];

        // // Convert data to views
        Object.entries(dataList).forEach(([zone, families]) => {


            var newListItems = families.map(famData => {
                var name = famData[1] + " " + famData[2];

                return (<SamparkFamilyListItem name={name} address={famData[4]} ></SamparkFamilyListItem>);

            });

            if (newListItems.length > 0) {
                listItems.push(<Separator bordered style={{height: 50, justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{zone}</Text>
                </Separator>);

                listItems = listItems.concat(newListItems);
            }

        })

        return listItems;

    }

    render() {

        var familyToVisitListItems = this.generateListItems(this.state.familyToVisitData);
        // var familyVisitedListItems = this.generateListItems(this.state.familyVisitedData);


        // console.log('inside haribhakt render');
        return (
            <Content>
                {/*<Text>Houses to Visit</Text>*/}
                <List>
                    {familyToVisitListItems}
                </List>
                {/*<Text>Houses Visited</Text>*/}
                {/*<List>*/}
                    {/*{familyVisitedListItems}*/}
                {/*</List>*/}
            </Content>
        );
    }

}

export default Vichran;