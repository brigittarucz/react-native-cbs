import React from 'react';
import { View, FlatList, Text, Image, StyleSheet} from 'react-native';


const ChatIndividual = (props) => {
    const {navigation, route} = props;
    var messages = 0

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
        <View>
            <View style={styles.messageToContainer}>
                <Text style={styles.messageToMessage} >Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
                <Text style={styles.messageToDate} >10:44</Text>
            </View>
            <View style={styles.messageFromContainer}>
                <View>
                    <Image style={styles.messageFromImage} source='https://randomuser.me/api/portraits/women/0.jpg'/>
                    <Text style={styles.messageFromMessage}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Text>
                </View>
                <Text style={styles.messageFromUser}>From Alexa Rollins</Text>
                <Text style={styles.messageFromDate}>10:40</Text>
            </View>
            <View>
                <Image source='https://randomuser.me/api/portraits/women/0.jpg' style={{width: 20, height: 20}}/>
                <Text>Write a message</Text>
            </View>
        </View>
    );
}

export default ChatIndividual;

const styles = StyleSheet.create({
    messageFromImage: {
        width: 50, 
        height: 50,
        borderRadius: 50
    },
    messageToContainer: {
        width: "75%",
        marginLeft: "25%"
    },
    messageToMessage: {
        backgroundColor: "#5050A5",
        borderRadius: 15,
        padding: 15,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 18,
        color: "white"
    },
    messageToDate: {
        textAlign: 'right',
        marginRight: 10,
        fontSize: 16
    }
});