import * as React from "react";
import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, Image, ImageBackground, TouchableOpacity } from "react-native";


export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView  style={styles.safeArea}/>
                <ImageBackground style={styles.backgroundImage} source={require("../assets/bg_image.png")}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate('ISSLocation')
                    }}>
                        <Text style={styles.routeText}>ISS Location</Text>
                        <Text style={styles.knowMore}>Click here to know more</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require("../assets/iss_icon.png")}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>{
                        this.props.navigation.navigate('MeteorScreen')
                    }}>
                        <Text style={styles.routeText}>Meteor</Text>
                        <Text style={styles.knowMore}>Click here to know more</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/meteor_icon.png")}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    }, 
    safeArea:{
        marginTop: Platform.OS==='android' ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})