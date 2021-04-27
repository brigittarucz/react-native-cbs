import React from 'React';
import { View, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { 
    Ionicons, 
    AntDesign,
    MaterialIcons
 } from '@expo/vector-icons/';
 import { LinearGradient } from 'expo-linear-gradient';

 const Home = () => {
    // const events = useSelector((state) => state.EventReducer.events)
    // console.log(events);

    return (
        <View>
            <Organization />
            <Blog />
            <Event />
        </View>
    );
}

const Organization = () => {
    return (
        <View style={{margin: 20, marginBottom: 10}}>
            <ImageBackground style={{ borderRadius: 15 }} imageStyle={{borderRadius: 15, overflow: 'hidden'}} source={{uri: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/lt5wv-MDAZM7NW98P-Full-Image_GalleryBackground-en-US-1601076926833._SX1080_.jpg"}} style={{}} >
            <LinearGradient
            // Background Linear Gradient
            style={{ borderRadius: 15 }}
            colors={['transparent', 'rgba(0,0,0,0.9)']} >
                    <View style={{padding: 10, marginTop: 45 }}>
                        <Text style={{fontWeight: 700, color: 'white', fontSize: 22}}>Christmas with CBS Yoga</Text>
                        <Text style={{fontWeight: 200, color: 'white', fontSize: 14}}>CBS Yoga</Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 5, marginBottom: 5}}>
                            <Ionicons name="time" style={{marginRight: 10, color: 'white', fontSize: 16}}/>
                            <Text style={{fontWeight: 500, color: 'white', fontSize: 14}}>MON, 1 APR - 15.00 - 18.00</Text>
                        </View>
                        <View style={{flexDirection:'row', flexWrap:'wrap', marginBottom: 5}}>
                            <Ionicons name="location" style={{marginRight: 10, color: 'white', fontSize: 16}} />
                            <Text style={{fontWeight: 100, color: 'white', fontSize: 14}}>Dalgas Have, 2000 Frederiksberg</Text>
                        </View>
                    </View>
            </LinearGradient>
            </ImageBackground>
        </View>
    )
}

const Event = () => {
    return (
        <View style={{margin: 20, marginBottom: 10, backgroundColor: 'white', borderRadius: 15, padding: 10}}>
             <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}>
                <Ionicons name="md-document-text" style={{color: "rgb(80,80,165)", fontSize: 16, marginRight: 5}} />
                <Text style={{color: "rgb(80,80,165)", fontWeight: 700}}>BLOG</Text>
             </View>
             <Text style={{fontWeight: 700, fontSize: 22, lineHeight: 24, marginTop: 5}}>Tesla turns a profit on bitcoin sale, but its ‘Technoking’ 
                 and ‘Master of Coin’ say it won’t become a habit</Text>
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
                <Image style={{width: 35, height: 35, borderRadius: 5, marginRight: 5}} source={{uri: "https://media.licdn.com/dms/image/C4D0BAQF8X8ZdYUCrYg/company-logo_200_200/0?e=2159024400&v=beta&t=tBkHnT3BdTCy0NfNM5Rosqd9L9tWdTf9eFfgJ0jpd78"}} />
                <Text style={{fontWeight: 700}}>CBS Investment Club</Text>
             </View>
        </View>
    )
}

const Blog = () => {
    return (
        <View style={{margin: 20, marginBottom: 10}}>
            <Image source={{uri: "https://i.pinimg.com/originals/00/6f/e7/006fe7f785c991102866b859a4b6be7e.jpg"}} />
            <Image source={{uri: "https://cdn.britannica.com/19/1919-050-E3CBE7A5/Oliver-Creole-Jazz-Band-Chicago-1923.jpg"}} />
            <TouchableOpacity style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center'}}>
                <AntDesign name="check" />
                <Text>Following</Text>
            </TouchableOpacity>
            <Text>CBS Jam</Text>
            <Text>Description of the organization. Something which can be expanded if the user whishes to see more of it. This is just a snippet of the text.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default Home;