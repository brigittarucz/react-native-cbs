import React from 'react';
import { View, FlatList, Text, Image, TextInput } from 'react-native';
import { chatFromStyles, chatToStyles, chatStartStyles } from './styles';
import { USERS } from '../../data/dummy-data';

const ChatIndividual = (props) => {
    const {navigation, route} = props;
    if(route.params != undefined) {
        console.log(route.params.item.chatMessages);
    }
    var messages = 0

    const loggedInUserPrivate = 4;
    const loggedInUserPublic = 1;

    console.log(loggedInUserPrivate)
    console.log(loggedInUserPublic)

    // if(route.params != undefined) {
    //     console.log(route.params.item.chatMessages[0])
    //     messages = <FlatList 
    //                     data={route.params.item.chatMessages}
    //                     renderItem={itemData => (
    //                         <View>
    //                             <Text>{itemData.item.message}</Text>
    //                         </View>
    //                     )}
    //                />
    // }


    return (
        // <Text>{route.params.item.chatMessages[0].id}</Text>
        // <View>
        //     {messages}
        // </View>
        <View style={{height: '100%', width: '100%'}}>

            
            <View style={chatStartStyles.start}>
                <Image style={chatStartStyles.startImage} source='https://randomuser.me/api/portraits/women/0.jpg' />
                <TextInput style={chatStartStyles.startInput} placeholder="Write message"/>
            </View>
        </View>
    );
}

const ChatTo = (props) => {
    return (
        <View style={chatToStyles.to}>
            <Text style={chatToStyles.toMessage} >Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
            <Text style={chatToStyles.toDate} >10:44</Text>
        </View>
    )
}

const ChatFrom = (props) => {
    return (
        <View style={chatFromStyles.from}>
                <View style={chatFromStyles.fromContainer}>
                    <Image style={chatFromStyles.fromImage} source='https://randomuser.me/api/portraits/women/0.jpg'/>
                    <Text style={chatFromStyles.fromMessage}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Text>
                </View>
                <View style={chatFromStyles.fromContainerText}>
                    <Text style={chatFromStyles.fromUser}>From Alexa Rollins</Text>
                    <Text style={chatFromStyles.fromDate}>10:40</Text>
                </View> 
        </View>
    )
}

export default ChatIndividual;

