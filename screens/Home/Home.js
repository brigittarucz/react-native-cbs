import React from 'react';
import { View, ScrollView, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import EventReducer from '../../store/reducers/EventReducers';
import { useSelector } from "react-redux";

import { 
    Ionicons, 
    AntDesign,
    MaterialIcons
 } from '@expo/vector-icons/';
 import { LinearGradient } from 'expo-linear-gradient';

 const Home = () => {
    const activites = useSelector((state) => state.EventReducer.events)
    console.log(activites);

    var eventsArr = [];
    var blogsArr = [];
    var organizationsArr = [];

    activites.forEach(activity => {
        if(activity.postType === "event") {
            eventsArr.push(activity)
        }
        if(activity.postType === "blog") {
            blogsArr.push(activity)
        }
        if(activity.postType === "organization") {
            organizationsArr.push(activity)
        }
    })

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                {organizationsArr.map(el => ( <Organization key={el.id.toString()} event={el} /> ))}
                {blogsArr.map(el => ( <Blog key={el.id.toString()} event={el} /> ))}
                {eventsArr.map(el => ( <Event key={el.id.toString()} event={el} /> ))}
            </ScrollView>
        </View>
    );
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

const Event = (props) => {
    return (
        <View style={{margin: 20, marginBottom: 10, borderWidth: 1, borderColor: 'rgb(221,221,221)', borderRadius: 15 }}>
            <ImageBackground style={{ borderRadius: 15 }} imageStyle={{borderRadius: 15, overflow: 'hidden'}} source={{uri: props.event.thumbnail}} style={{}} >
            <LinearGradient
            // Background Linear Gradient
            style={{ borderRadius: 15 }}
            colors={['transparent', 'rgba(0,0,0,0.9)']} >
                    <View style={{padding: 10, marginTop: 45 }}>
                        <Text style={{fontWeight: 700, color: 'white', fontSize: 22}}>{props.event.title}</Text>
                        <Text style={{fontWeight: 200, color: 'white', fontSize: 14}}>{props.event.organization}</Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 5, marginBottom: 5}}>
                            <Ionicons name="time" style={{marginRight: 10, color: 'white', fontSize: 16}}/>
                            <Text style={{fontWeight: 500, color: 'white', fontSize: 14}}>{timeConverter(props.event.startDate)}-{timeConverter(props.event.endDate)}</Text>
                        </View>
                        <View style={{flexDirection:'row', flexWrap:'wrap', marginBottom: 5}}>
                            <Ionicons name="location" style={{marginRight: 10, color: 'white', fontSize: 16}} />
                            <Text style={{fontWeight: 100, color: 'white', fontSize: 14}}>{props.event.location}</Text>
                        </View>
                    </View>
            </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const Blog = (props) => {
    return (
        <View style={{margin: 20, marginBottom: 10, borderWidth: 1, borderColor: 'rgb(221,221,221)', backgroundColor: 'white', borderRadius: 15, padding: 10}}>
             <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}>
                <Ionicons name="md-document-text" style={{color: "rgb(80,80,165)", fontSize: 16, marginRight: 5}} />
                <Text style={{color: "rgb(80,80,165)", fontWeight: 700}}>BLOG</Text>
             </View>
             <Text style={{fontWeight: 700, fontSize: 22, lineHeight: 24, marginTop: 5}}>{props.event.title}</Text>
             <View style={{marginTop: 5, marginBottom: 5, flexDirection:'row', flexWrap:'wrap', alignItems: 'center', justifyContent: "space-between"}}>
                <Text style={{color: "rgb(183,183,183)"}}>3h</Text>
                <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}>
                    <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center', marginRight: 10}}>
                        <AntDesign style={{color: "rgb(80,80,165)", fontSize: 16, marginRight: 5}} name="like1" />
                        <Text style={{color: "rgb(80,80,165)", fontWeight: 700}}>73</Text>
                    </View>
                    <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}>
                        <MaterialIcons style={{color: "rgb(80,80,165)", fontSize: 16, marginRight: 5}} name="insert-comment" />
                        <Text style={{color: "rgb(80,80,165)", fontWeight: 700}}>31</Text>
                    </View>
                </View>
             </View>
             <View
                style={{
                    marginTop: 5,
                    marginBottom: 10,
                    borderBottomColor: 'rgba(183,183,183, 0.4)',
                    borderBottomWidth: 0.1,
                }}
             />
             <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Image style={{width: 35, height: 35, borderRadius: 5, marginRight: 5}} source={{uri: props.event.authorImage}} />
                <Text style={{fontWeight: 700}}>{props.event.organization}</Text>
             </View>
        </View>
    )
}

const Organization = (props) => {
    return (
        <View style={{margin: 20, marginBottom: 10, backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: 'rgb(221,221,221)'}}>
            <Image style={{borderTopLeftRadius: 15, borderTopRightRadius: 15, width: '100%', height: 150}} source={{uri: props.event.thumbnail}} />
            <View style={{padding: 10}}>
                <View style={{width: 110, height: 110, borderRadius: 10, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,

                    elevation: 9,
                    marginTop: -65,
                    marginLeft: 10 }}>
                <Image style={{width: 110, 
                               height: 110, 
                               borderRadius: 10, 
                               borderWidth: 5, 
                               borderColor: 'white',
                               }} source={{uri: props.event.authorImage}} />
                </View>
                <TouchableOpacity style={{shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.22,
                                        shadowRadius: 2.22, 
                                        backgroundColor: 'white',
                                        padding: 7,
                                        elevation: 8, borderRadius: 5, borderWidth: 1,
                                        width: 150, borderColor: "rgb(80,80,165)", flexDirection:'row', 
                                        flexWrap:'wrap', alignItems: 'center', justifyContent: 'center',
                                        left: 150, top: -35}}>
                    <AntDesign name="check" style={{color: "rgb(80,80,165)", fontSize: 18, fontWeight: 900, marginRight: 5}}/>
                    <Text style={{color: "rgb(80,80,165)", fontSize: 17, fontWeight: 700}}>Following</Text>
                </TouchableOpacity>
                <Text style={{fontWeight: 700, fontSize: 18, paddingLeft: 10, marginTop: -20}}>{props.event.organization}</Text>
                <Text style={{fontSize: 16, padding: 10}}>{props.event.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default Home;