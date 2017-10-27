import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
class AppHeader extends Component {
    render() {
        // return (
        //     <View>
        //         <Text>{this.props.title}</Text>
        //     </View>
        // )
        return (
            <Header>
                {/*<Left>*/}
                    {/*/!*<Button transparent>*!/*/}
                        {/*/!*<Icon name='arrow-back' />*!/*/}
                    {/*/!*</Button>*!/*/}
                {/*</Left>*/}
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
                {/*<Right>*/}
                    {/*/!*<Button transparent>*!/*/}
                        {/*/!*<Icon name='menu' />*!/*/}
                    {/*/!*</Button>*!/*/}
                {/*</Right>*/}
            </Header>
        );
    }
}

export default AppHeader;
