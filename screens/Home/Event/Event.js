import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { eventStyles } from './styles';

import { 
    Ionicons, 
 } from '@expo/vector-icons/';
 import { LinearGradient } from 'expo-linear-gradient';


const Event = (props) => {
    return (
        <View style={eventStyles.container}>
            <ImageBackground style={eventStyles.image} imageStyle={eventStyles.imageStyle} source={{uri: props.event.thumbnail}} style={{}} >
            <LinearGradient
            // Background Linear Gradient
            style={{ borderRadius: 15 }}
            colors={['transparent', 'rgba(0,0,0,0.9)']} >
                    <View style={eventStyles.containerInfo}>
                        <Text style={eventStyles.eventTitle}>{props.event.title}</Text>
                        <Text style={eventStyles.eventOrganization}>{props.event.organization}</Text>
                        <View style={eventStyles.containerIcons}>
                            <Ionicons name="time" style={eventStyles.icon}/>
                            <Text style={eventStyles.textBold}>{timeConverter(props.event.startDate)}-{timeConverter(props.event.endDate)}</Text>
                        </View>
                        <View style={eventStyles.containerIcons}>
                            <Ionicons name="location" style={eventStyles.icon} />
                            <Text style={eventStyles.text}>{props.event.location}</Text>
                        </View>
                    </View>
            </LinearGradient>
            </ImageBackground>
        </View>
    )
}


// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

export default Event;