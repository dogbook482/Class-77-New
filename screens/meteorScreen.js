import * as React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export default class Meteor extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleText}>Meteor Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        flex:1,
    },
    titleText:{
        color:'black',
        fontSize:12,
    },
})