import { StyleSheet } from "react-native";

export default StyleSheet.create({

    all_container:{
        backgroundColor:'orange',
    },
    container :{
        borderBottomLeftRadius:40,
        borderTopLeftRadius:40,
        borderWidth:1,
        borderColor:'#caf0f8',
        backgroundColor:"white",
        marginLeft:10,
        marginTop:10,
        flexDirection:"row",
    },
    image:{
       
        width:100,
        minHeight:100,
        borderRadius:40,
        resizeMode:'contain',
        backgroundColor:'white',

    },
    body_container:{
       
        padding:5,
        flex:1,
        justifyContent:'space-between',
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        color:'black'
    }
  
})