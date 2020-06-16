import React, {Component} from "react";
import {View, Text, ImageBackground,Dimensions, Image, TextInput} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {RectButton, TouchableOpacity} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

const initialState = {
    mobile:true,
    apps:false
}

class Options extends Component<any, any>{

    state = { ...initialState }

    showMobileOption(){
        this.setState({mobile:true});
        this.setState({apps:false});
    }

    showAppsOption(){
        this.setState({apps:true});
        this.setState({mobile:false});
    }

    render(){
        return (
            <ImageBackground
                source={require('../../assets/loader.png')}
                style={styles.container}
                imageStyle={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
            >
                <View style={styles.header}/>
                <View>
                    <LinearGradient
                      colors={['#464444', 'rgba(196, 196, 196, 0)']}
                      style={styles.optionButton}
                    >
                        <RectButton onPress={this.showMobileOption.bind(this)}>
                            <Text style={styles.startText}>Mobile</Text>
                        </RectButton>

                    </LinearGradient>

                    <LinearGradient
                        colors={['#C4C4C4', 'rgba(196, 196, 196, 0)']}
                        style={styles.optionButtonApp}
                    >
                        <RectButton onPress={this.showAppsOption.bind(this)}>
                            <Text style={styles.startText}>Applications</Text>
                        </RectButton>
                    </LinearGradient>
                </View>

                <View>
                    { this.state.mobile ? (
                        <View style={styles.main}>
                            <Text style={styles.objectif}>Objectif</Text>
                            <View style={styles.quotBox}>
                                <Text style={styles.inputLabelQuot}>Quotidien </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='ex:5H'
                                />
                            </View>

                            <View style={styles.hebdoBoxBox}>
                                <Text style={styles.inputLabelHebd}>Hebdomadaire </Text>
                                <TextInput
                                    style={styles.inputHebd}
                                    placeholder='ex:35H'
                                />
                            </View>
                        </View>
                        ) :
                        <View style={styles.container}>
                            <View style={styles.appTitle}>
                                <Text style={styles.app}>App</Text>
                                <Text style={styles.appObjectif}>Objectif</Text>
                            </View>

                            <View style={styles.whatsapp}>
                                <View style={styles.whatsBox}>
                                    <Image style={styles.whatsLogo} source={require('../../assets/whatsappLogo.png')} />
                                </View>
                                <TextInput style={styles.whatsDescription}/>
                            </View>
                        </View>
                    }
                </View>

                <View>
                    <LinearGradient
                        colors={['#269300', '#37D300']}
                        style={styles.startButton}
                    >
                        <RectButton
                            onPress={()=>{}}
                        >
                            <Text style={styles.startText}>CONTINUEZ</Text>
                        </RectButton>
                    </LinearGradient>
                </View>

            </ImageBackground>
        );
    }
}

export default Options;