import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Home from './screens/Home';
import Search from './screens/Search';
import CreatePost from './screens/CreatePost';
import Notification from './screens/Notification';
import Profile from './screens/Profile';
import { Text } from 'native-base';


export default class Main extends Component{

    static navigationOption = {
        
    }

    render(){
        return(
            <MainNavigator>
                <Text>
                    Main Page
                </Text>
            </MainNavigator>
        )
    }
}

const MainNavigator = createBottomTabNavigator({
    HomeTab:{
        screen: Home
    },
    SearchTab:{
        screen: Search
    },
    CreatePostTab:{
        screen: CreatePost
    },
    NotificationsTab:{
        screen: Notification
    },
    ProfileTab:{
        screen: Profile
    }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions:{
        showIcon: true,
        showLabel: false
    }
})