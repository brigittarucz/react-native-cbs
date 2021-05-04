import React from 'React';
import { View, StyleSheet, ImageBackground, Text, Platform, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const Discover = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
            <View style={{
                        backgroundColor: 'white',
                        margin: 20,
                        marginBottom: 10,
                        padding: 20,
                        borderRadius: 10,
                        flexDirection:'row', 
                        flexWrap:'wrap'
                    }}>
                <FontAwesome name="search" size={24} color="rgb(50,48,93)" style={{marginRight: 10}} />
                <TextInput 
                    placeholder="Search for events,posts and more"
                    placeholderTextColor="rgb(203,203,229)"
                    style={{width: '85%'}}></TextInput>
            </View>
            <View style={{margin: 20, marginBottom: 10, borderWidth: 1, borderColor: 'rgb(221,221,221)', borderRadius: 15}}>
                <ImageBackground style={{ borderRadius: 15 }} imageStyle={{borderRadius: 15, overflow: 'hidden'}} source={{uri: "https://www.inclusion-europe.eu/wp-content/uploads/2019/01/inclusion-europe-whatwedo-events-scaled.jpg"}} style={{}} >
                    <LinearGradient
                    style={{ borderRadius: 15 }}
                    colors={['transparent', 'rgba(111,32,107,1)']} >
                        <Text style={{
                            fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
                            fontWeight: 700,
                            fontSize: 22,
                            color: 'white',
                            marginTop: 50,
                            marginBottom: 50,
                            textAlign: 'center'
                        }}>ALL EVENTS</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View style={{margin: 20, marginBottom: 10, borderWidth: 1, borderColor: 'rgb(221,221,221)', borderRadius: 15}}>
                <ImageBackground style={{ borderRadius: 15 }} imageStyle={{borderRadius: 15, overflow: 'hidden'}} source={{uri: "https://ninanco.com/wp-content/uploads/2017/02/SU-Logos-868x736.jpg"}} style={{}} >
                    <LinearGradient
                    style={{ borderRadius: 15}}
                    colors={['transparent', 'rgba(91,89,125,1)']} >
                        <Text style={{
                            fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
                            fontWeight: 700,
                            fontSize: 22,
                            color: 'white',
                            marginTop: 50,
                            marginBottom: 50,
                            textAlign: 'center'
                        }}>ALL STUDENT ORGANISATIONS</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View style={{margin: 20, marginBottom: 10, borderWidth: 1, borderColor: 'rgb(221,221,221)', borderRadius: 15}}>
                <ImageBackground style={{ borderRadius: 15 }} imageStyle={{borderRadius: 15, overflow: 'hidden'}} source={{uri: "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg"}} style={{}} >
                    <LinearGradient
                    style={{ borderRadius: 15 }}
                    colors={['transparent', 'rgba(38,149,117,1)']} >
                        <Text style={{
                            fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
                            fontWeight: 700,
                            fontSize: 22,
                            color: 'white',
                            marginTop: 50,
                            marginBottom: 50,
                            textAlign: 'center'
                        }}>ALL POSTS</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Discover;