import React, { useState} from "react";
import {View, Text, ImageBackground, StyleSheet, Dimensions, StatusBar, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {RectButton} from "react-native-gesture-handler";

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
                    <RectButton
                        onPress={handleMobile}
                        style={styles.optionButton}
                    >
                        <Text style={styles.startText}>Mobile</Text>
                    </RectButton>

                    <RectButton
                        onPress={handleApps}
                        style={styles.optionButtonApp}
                    >
                        <Text style={styles.startText}>Application</Text>
                    </RectButton>
                </View>

                <Text style={styles.objectif}>Objectif</Text>

                <View  >
                    <Text style={ styles.inputLabelQuot}>Quotidien </Text>
                    <TextInput
                        style={styles.input}
                        defaultValue='ex:5H'
                    />

                    <Text style={ styles.inputLabelHebd}>Hebdomadaire </Text>
                    <TextInput
                        style={styles.inputHebd}
                        defaultValue='ex:35H'
                    />

                </View>


            <View  >
                <Text style={ styles.inputLabelQuot}>Social network</Text>
            </View>


                <View>
                    <RectButton
                        onPress={handleApps}
                    style={styles.startButton}
                    >
                        <Text style={styles.startText}>CONTINUEZ</Text>
                    </RectButton>
                </View>
        </ImageBackground>
);
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#E5E5E5',
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
        width: 150,
        height: 38,
        left: 126,
        top: 200,
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 36,
        lineHeight: 38,
    },

    input: {
        left: 17,
        top: 200,
        height: 43,
        bottom:5,
        backgroundColor: '#C4C4C4',
        width: Dimensions.get('window').width / 1.1,
        opacity: 0.5,
        borderRadius: 6,
        color: '#FFFFFF'
    },
    inputHebd: {
        left: 17,
        top: 300,
        height: 43,
        bottom:5,
        backgroundColor: '#C4C4C4',
        width: Dimensions.get('window').width / 1.1,
        opacity: 0.5,
        borderRadius: 6,
        color: '#FFFFFF'
    },

    inputLabelHebd: {
        position: 'absolute',
        width: 180,
        height: 25,
        left: 20,
        top: 310,
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
        left: 20,
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
        top:331,
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
        width:146,
        height:44,
        top:102,
        left: 50,
        backgroundColor: 'red'
    },

    optionButtonApp : {
        width:147,
        height:55,
        top:68,
        left: 195,
        backgroundColor: 'red',
        borderRadius: 1
    }
})
export default Options;