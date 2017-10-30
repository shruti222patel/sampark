import React, {Component} from 'react';
import {Text} from 'react-native';
import {Content, List, ListItem, Right, Left} from 'native-base';
import MapButton from './MapButton';

class HariBhaktList extends Component {

    constructor(props) {
        super(props);
        // this.setState({list_items: []});
        this.state = {assignedKaryakars: []};
    }


    componentWillMount() {
        console.log('inside haribhakt componentWillMount');
        fetch('https://spreadsheets.google.com/feeds/list/1E6HZL60wwOGsstKr-m5knsAIqZz9OeKi7dvipsP7sAc/1/public/basic?alt=json')
            .then((response) => response.json())
            .then((json)=>{
            console.log('Try promise ', json.length);
            console.log('AssignedKaryakar: '+this.props.assignedKaryakar);

            // this.setState({list_items:json.feed.entry});


            // Set assigned Karaykars

            var samparkFamilies = json.feed.entry.filter(e => {
                return e.title.$t === this.props.assignedKaryakar;
            }).map(e => {

                var data = e.content.$t.split(/[a-z]*:/);

                data = data.map(d => {
                    return d.replace(/^\s+|\s+$|,\s+$/g,'');
                });

                console.log(data);
               return data;
            });

            var data = []
            for (let fam of samparkFamilies) {

                console.log(fam);

                var kar = (
                    <ListItem key={fam[1]}>
                        <Left>
                            <Text style={{fontSize:20}}>{fam[2]}</Text>
                        </Left>
                        <Right>
                            <MapButton destination={fam[3]}></MapButton>
                        </Right>
                    </ListItem>);

                data.push(kar)
            }

            this.setState({assignedKaryakars: data});


            // Set primary contacts
            //
            // this.props.assignedKarakar;




        }).catch((error) => {
            console.error(error);
        });
    }




    render() {
        // console.log('inside haribhakt render');
        return (
            <Content>
                <List>
                    {this.state.assignedKaryakars}
                </List>
            </Content>
        );
    }

}

export default HariBhaktList;