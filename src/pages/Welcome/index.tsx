import React from "react";
import {StyleSheet, View, StatusBar, Text, ImageBackground, Dimensions,} from "react-native";
import {RectButton} from 'react-native-gesture-handler';
import styles from "./style";

import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from "expo-linear-gradient";

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

            <LinearGradient
                colors={['#269300','#37D300']}
                style={styles.startButton}
            >
                <RectButton
                    onPress={handleRegister}
                >
                    <Text style={styles.startText}>CONTINUEZ</Text>
                </RectButton>
            </LinearGradient>


        </ImageBackground>
    );
}

export default Welcome;