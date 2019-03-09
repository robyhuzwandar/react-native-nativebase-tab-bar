import React, { Component } from 'react'
import { Container, Icon, Content, Text } from 'native-base';


export default class CreatePost extends Component{

    static navigationOption = {
        tabBarIcon: ({tintColor}) => {
            return(
                <Icon name='ios-add-circle-outline' style={{ color: tintColor }}/>
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