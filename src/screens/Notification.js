import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base';


export default class Notification extends Component{

    static navigationOption = {
        tabBarIcon: ({tintColor}) => {
            return(
                <Icon name='md-heart-outline' style={{ color: tintColor }}/>
            )
        }
    }

    render(){
        return(
            <Container>
            <Content>
            <Text>
                Main Page
            </Text>
            </Content>
        </Container>
        )
    }
}