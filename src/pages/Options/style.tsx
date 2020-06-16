import {Dimensions, StyleSheet} from "react-native";

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

    mainSocial:{

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
    },

    appTitle:{
       flexDirection:'row'
    },
    app:{
        width: 50,
        height: 25,
        left: 34,
        top: 197,
        fontSize:24,
        lineHeight:25,
        textAlign:'center',
        color:'#FFFFFF'
    },

    appObjectif:{
        width: 85,
        height: 25,
        left: 180,
        top: 197,
        fontSize:24,
        lineHeight:25,
        textAlign:'center',
        color:'#FFFFFF'
    },

    whatsapp:{
        flexDirection:"row"
    },
    whatsBox:{
        position:'absolute',
        width: 62,
        height: 40,
        left: 22,
        top: 274,
        borderRadius:10,
        backgroundColor:'rgba(196, 196, 196, 0.6)',
    },
    whatsLogo:{
        position:'relative',
        width: 31,
        height: 32,
        left: 15,
        top: 5,
    },

    whatsDescription:{

    },
    allInputs:{
        position:'absolute',
        width: 175,
        height: 240,
        left: 164,
        top: 253,
    }


})

export default styles;