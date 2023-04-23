import * as React from "react";
import { TouchableOpacity, View, StyleSheet, Text} from "react-native";

export default class ISSLocation extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleText}>ISS Location Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        flex:1,
    },
    titleText:{
        color:'white',
        fontSize:12,
    },
})