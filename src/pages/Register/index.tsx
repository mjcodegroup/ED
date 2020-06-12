import React from "react";
import {View, Text, ImageBackground, StyleSheet, Dimensions, StatusBar, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {RectButton} from "react-native-gesture-handler";
import {LinearGradient} from "expo-linear-gradient";
import styles from "./style";

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

            <LinearGradient
                colors={['#269300','#37D300']}
                style={styles.continueButton}
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

export default Register;