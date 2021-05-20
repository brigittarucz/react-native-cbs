import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { organizationStyles } from './styles';

import { 
    AntDesign
} from '@expo/vector-icons/';


const Organization = (props) => {
    return (
        <View style={organizationStyles.container}>
            <Image style={organizationStyles.thumbnail} source={{uri: props.event.thumbnail}} />
            <View style={{padding: 10}}>
                <View style={organizationStyles.imageContainer}>
                <Image style={organizationStyles.image} source={{uri: props.event.authorImage}} />
                </View>
                <TouchableOpacity style={organizationStyles.followingButton}>
                    <AntDesign name="check" style={organizationStyles.followingIcon}/>
                    <Text style={organizationStyles.followingText}>Following</Text>
                </TouchableOpacity>
                <Text style={organizationStyles.textOrganizationName}>{props.event.organization}</Text>
                <Text style={organizationStyles.textOrganizationDesc}>{props.event.description}</Text>
            </View>
        </View>
    )
}

export default Organization;