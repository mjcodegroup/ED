import React from "react";
import {View, Text, ImageBackground, StyleSheet, Dimensions, StatusBar, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {RectButton} from "react-native-gesture-handler";

const Register = () => {
    const navigation = useNavigation();
    function handleRegister() {
        navigation.navigate('Options')
    }
    return(
        <ImageBackground
            source={require('../../assets/loader.png')}
            style={styles.container}
            imageStyle={{ width:Dimensions.get('window').width, height:Dimensions.get('window').height }}
        >
            <View style={ styles.header} />
            <StatusBar translucent backgroundColor='transparent'/>

            <View  >
                <Text style={ styles.inputLabel}>Nom </Text>
                <TextInput
                    style={styles.input}
                    defaultValue="Nom"
                >

                </TextInput>
            </View>
            <View>
                <RectButton
                    onPress={handleRegister}
                    style={styles.continueButton}
                >
                    <Text style={styles.startText}>CONTINUER</Text>
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

    input: {
        left: 17,
        top: 300,
        height: 43,
        backgroundColor: '#C4C4C4',
        width: Dimensions.get('window').width / 1.1,
        opacity: 0.5,
        borderRadius: 6,
        color: '#FFFFFF'
    },
    inputLabel : {
        position: 'absolute',
        width: 60,
        height: 25,
        left: 20,
        top: 270,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 25,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    continueButton:{
        width:Dimensions.get('window').width / 2,
        height:44,
        left:95,
        top:431,
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
    }
})
export default Register;