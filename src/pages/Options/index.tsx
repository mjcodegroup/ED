import React, { useState} from "react";
import {View, Text, ImageBackground,Dimensions, StatusBar, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {RectButton} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

const Options = () => {
    const navigation = useNavigation();
    const [ mobile, setMobile ] = useState(true);
    const [ apps, setApps ] = useState(false);

    function handleMobile() {
        setMobile(true)
        setApps(false)
    }

    function handleContinue(){
        navigation.goBack();
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

            <View>
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
                        <RectButton
                            onPress={handleContinue}
                        >
                             <Text style={styles.startText}>CONTINUEZ</Text>
                        </RectButton>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Options;