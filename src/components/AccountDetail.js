import React, {Component } from "react"
import {View, Text, TouchableOpacity} from "react-native"
import RigList from "./RigList";


class AccountDetail extends Component{

    render(){
        return(
            <View>
                <TouchableOpacity onPress={ () =>  console.log("PRESSED")} style={styles.buttonStyle} >
                    <Text style={styles.buttonTextStyle}>Settings</Text>
                </TouchableOpacity>
                <RigList />
            </View>
        )
    }
}



const styles = {
    buttonStyle: {
        height:45,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        marginTop:20,
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: "#007aff",
        fontSize: 16,
        fontWeight: '600',
        padding:10

    }
}



export default AccountDetail;