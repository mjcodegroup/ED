import {Dimensions, StyleSheet} from "react-native";

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

export default styles;