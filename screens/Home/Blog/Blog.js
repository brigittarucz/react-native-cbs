import React from 'react';
import { View, Text, Image} from 'react-native';
import { blogStyles } from './styles';

import { 
    Ionicons, 
    AntDesign,
    MaterialIcons
 } from '@expo/vector-icons/';

const Blog = (props) => {
    return (
        <View style={blogStyles.container}>
             <View style={blogStyles.header}>
                <Ionicons name="md-document-text" style={blogStyles.icon} />
                <Text style={blogStyles.headerText}>BLOG</Text>
             </View>
             <Text style={blogStyles.title}>{props.event.title}</Text>
             <View style={blogStyles.status}>
                <Text style={blogStyles.hourText}>3h</Text>
                <View style={blogStyles.iconContainer}>
                    <View style={[blogStyles.iconContainer,{marginRight: 10}]}>
                        <AntDesign style={blogStyles.icon} name="like1" />
                        <Text style={blogStyles.iconFont}>73</Text>
                    </View>
                    <View style={blogStyles.iconContainer}>
                        <MaterialIcons style={blogStyles.icon} name="insert-comment" />
                        <Text style={blogStyles.iconFont}>31</Text>
                    </View>
                </View>
             </View>
             <View style={blogStyles.hr} />
             <View style={blogStyles.authorContainer}>
                <Image style={blogStyles.authorImage} source={{uri: props.event.authorImage}} />
                <Text style={{fontWeight: 700}}>{props.event.organization}</Text>
             </View>
        </View>
    )
}


export default Blog;