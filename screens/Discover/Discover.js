import React from 'React';
import { View, ImageBackground, Text, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { discoverStyles } from './styles';

const Discover = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
            <View style={discoverStyles.searchContainer}>
                <FontAwesome name="search" size={24} color="rgb(50,48,93)" style={{marginRight: 10}} />
                <TextInput 
                    placeholder="Search for events,posts and more"
                    placeholderTextColor="rgb(203,203,229)"
                    style={{width: '85%'}}></TextInput>
            </View>
            <View style={discoverStyles.discoverContainer}>
                <ImageBackground style={{ borderRadius: 15 }} imageStyle={{borderRadius: 15, overflow: 'hidden'}} source={{uri: "https://www.inclusion-europe.eu/wp-content/uploads/2019/01/inclusion-europe-whatwedo-events-scaled.jpg"}} style={{}} >
                    <LinearGradient
                    style={{ borderRadius: 15 }}
                    colors={['transparent', 'rgba(111,32,107,1)']} >
                        <Text style={discoverStyles.discoverText}>ALL EVENTS</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View style={discoverStyles.discoverContainer}>
                <ImageBackground style={{ borderRadius: 15 }} imageStyle={{borderRadius: 15, overflow: 'hidden'}} source={{uri: "https://ninanco.com/wp-content/uploads/2017/02/SU-Logos-868x736.jpg"}} style={{}} >
                    <LinearGradient
                    style={{ borderRadius: 15}}
                    colors={['transparent', 'rgba(91,89,125,1)']} >
                        <Text style={discoverStyles.discoverText}>ALL STUDENT ORGANISATIONS</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View style={discoverStyles.discoverContainer}>
                <ImageBackground style={{ borderRadius: 15 }} imageStyle={{borderRadius: 15, overflow: 'hidden'}} source={{uri: "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg"}} style={{}} >
                    <LinearGradient
                    style={{ borderRadius: 15 }}
                    colors={['transparent', 'rgba(38,149,117,1)']} >
                        <Text style={discoverStyles.discoverText}>ALL POSTS</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
            </ScrollView>
        </View>
    );
}


export default Discover;