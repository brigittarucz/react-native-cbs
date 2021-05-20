import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from "react-redux";

import Organization from './Organization/Organization';
import Event from './Event/Event';
import Blog from './Blog/Blog';

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

export default Home;