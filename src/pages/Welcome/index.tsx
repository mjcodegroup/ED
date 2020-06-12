import React from "react";
import {StyleSheet, View, StatusBar, Text, ImageBackground, Dimensions,} from "react-native";
import {RectButton} from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();
    function handleRegister() {
        navigation.navigate('Register')
    }
    return(
        <ImageBackground
            source={require('../../assets/loader.png')}
            style={styles.container}
            imageStyle={{width:Dimensions.get('window').width, height:Dimensions.get('window').height}}
        >
            <View style={ styles.header} />
            <StatusBar translucent backgroundColor='transparent'/>


            <View style={styles.welcomeBox}>
                <Text style={styles.title}> Byenvini</Text>
                <Text style={styles.description}>
                    ED se yon aplikasyon kap edew jere tan wap pase sou telefòn ou
                    pandan lap rekeyi info sou tan
                    ou itilize telefon ou pou prevni ou
                    lè ou egzajere e pou baw
                    yon statistik tou
                </Text>
            </View>

            <View>
                <RectButton
                    onPress={handleRegister}
                    style={styles.startButton}
                >
                    <Text style={styles.startText}>DEMARRER</Text>
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
        backgroundColor:'#333333'
    },

    welcomeBox: {
        width: Dimensions.get('window').width,
        height: 228,
        top: 161, color: '#FFFFFF',
        textAlign:'center'
    }
    ,

    title:{
        fontSize: 48,
        lineHeight: 51,
        color: '#FFFFFF',
        textAlign: 'center'

    },

    description:{
        marginTop: 30,
        fontSize: 24,
        lineHeight: 26,
        color: '#FFFFFF',
        textAlign: 'center'

    },
    footer:{
        width:360,
        height:361,
        left:0,
        top:275,
    },
    startButton:{
        width:Dimensions.get('window').width/ 2,
        height:44,
        top:300,
        left:95,
        borderRadius:17,
        backgroundColor:'green',
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

export default Welcome;