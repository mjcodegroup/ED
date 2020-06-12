import React, { useState} from "react";
import {View, Text, ImageBackground, StyleSheet, Dimensions, StatusBar, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {RectButton} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Options = () => {
    const navigation = useNavigation();
    const [ mobile, setMobile ] = useState(true);
    const [ apps, setApps ] = useState(false);

    function handleMobile() {
        setMobile(true)
        setApps(false)
    }

    function handleApps() {
        setApps(true)
        setMobile(false)
    }
    return(
        <ImageBackground
            source={require('../../assets/loader.png')}
            style={styles.container}
            imageStyle={{ width:Dimensions.get('window').width, height:Dimensions.get('window').height }}
        >
            <View style={ styles.header} />
            <StatusBar translucent backgroundColor='transparent'/>
                <View>
                    <LinearGradient
                        colors={['#464444','rgba(196, 196, 196, 0)']}
                        style={styles.optionButton}
                    >
                        <Text style={styles.startText}>Mobile</Text>
                    </LinearGradient>

                    <LinearGradient
                        colors={['#C4C4C4','rgba(196, 196, 196, 0)']}
                        style={styles.optionButtonApp}
                    >
                        <Text style={styles.startText}>Application</Text>
                    </LinearGradient>
                </View>

                <Text style={styles.objectif}>Objectif</Text>

                <View  style={styles.main}>
                    <View style={styles.quotBox}>
                        <Text style={ styles.inputLabelQuot}>Quotidien </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='ex:5H'
                        />
                    </View>

                    <View style={styles.hebdoBoxBox}>
                        <Text style={ styles.inputLabelHebd}>Hebdomadaire </Text>
                        <TextInput
                            style={styles.inputHebd}
                            placeholder='ex:35H'
                        />
                    </View>
                </View>

                <View>
                    <LinearGradient
                        colors={['#269300','#37D300']}
                        style={styles.startButton}
                    >
                        <Text style={styles.startText}>CONTINUEZ</Text>
                    </LinearGradient>
                </View>
        </ImageBackground>
);
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#E5E5E5',
        top:0,
        left:0,
        right:0,
        bottom:0
    },

    main:{
       width:'100%'
    },

    header:{
        position:'absolute',
        width: Dimensions.get('window').width,
        height:54,
        left:0,
        top:0,
        backgroundColor:'#333333',
    },
    objectif:{
        position: 'absolute',
        width: 135,
        height: 38,
        left: 126,
        top: 210,
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 36,
        lineHeight: 38,
    },

    quotBox:{
        position: 'absolute',
        width: 293,
        height: 78,
        left: 32,
        top: 100,
        alignItems:"center"
    },

    hebdoBoxBox:{
        position: 'absolute',
        width: 293,
        height: 75,
        left: 32,
        top: 150,
        alignItems:"center"
    },


    input: {
        left: 0,
        top: 200,
        height: 43,
        bottom:5,
        backgroundColor: '#C4C4C4',
        right:0,
        width:'98%',
        opacity: 0.5,
        borderRadius: 6,
        color: '#FFFFFF'
    },
    inputHebd: {
        left: 0,
        top: 300,
        height: 43,
        bottom:5,
        right:0,
        backgroundColor: '#C4C4C4',
        width: '98%',
        opacity: 0.5,
        borderRadius: 6,
        color: '#FFFFFF'
    },

    inputLabelHebd: {
        position: 'absolute',
        width: 180,
        height: 25,
        left: 0,
        top: 270,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 25,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    inputLabelQuot : {
        position: 'absolute',
        width: 120,
        height: 25,
        left: 0,
        top: 170,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 25,
        textAlign: 'center',
        color: '#FFFFFF'
    },

    startButton:{
        width:Dimensions.get('window').width / 2,
        height:44,
        left:95,
        top:560,
        borderRadius:17,
        backgroundColor:'green',
        textAlignVertical: "center"
    },
    startText: {
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 18,
        color: '#FFFFFF',
        fontStyle: "normal",
        fontWeight: "normal",
        paddingTop: 7
    },

    optionButton : {
        position:'absolute',
        width:146,
        height:62,
        top:102,
        left: 34,
        borderRadius: 4
    },

    optionButtonApp : {
        position:'absolute',
        width:147,
        height:55,
        top:109,
        left: 180,
        borderRadius: 1
    }
})
export default Options;