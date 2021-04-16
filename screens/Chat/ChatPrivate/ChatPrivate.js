import React, { useEffect, useState } from 'react';

import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, TouchableOpacity } from 'react-native';

import { USERS } from '../../../data/dummy-data';
import { useSelector } from 'react-redux';
import ChatRoom from '../../../components/ChatRoom/ChatRoom';

import getChatRooms from '../utils';

const ChatPrivate = props => {
    var _isMounted = false;
    const currentState = useSelector(state => state);
    // console.log(currentState);
    const [ currentChatrooms, setCurrentChatrooms] = useState([])

    const navigation = useNavigation();

    const loggedInUserPrivate = USERS[3];
    // Only one additional public identity for now
    // TODO: pass through props loggedInUserPrivate & public
    const loggedInUserPublic = USERS[loggedInUserPrivate.additionalPublicIdentities[0].id-1];
    var tabScreens = null;
 
    useEffect(() => {
        _isMounted = true;

        if(_isMounted) {
            setCurrentChatrooms(getChatRooms(props.chatrooms, loggedInUserPublic, loggedInUserPrivate));
            return () => {
               _isMounted = false;
            }
        }
    }, [])
    
    return (
        <View>
            <FlatList 
                data={currentChatrooms}
                extraData={navigation}
                renderItem={itemData => (
                    <TouchableOpacity
                        onPress={() => 
                            navigation.navigate('Chat Individual', {
                                item: itemData.item
                            })
                        } >
                        <ChatRoom item={itemData.item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

export default ChatPrivate;