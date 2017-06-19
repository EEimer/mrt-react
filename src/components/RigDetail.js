import React from "react"
import {View, Text, Image } from "react-native"
import Card from "./Card"
import CardSection from "./CardSection"

const RigDetail = ({rig}) => {
    const {id, avg_h24,hashrate} = rig;
    const {
        thumbStyle,
        headerContentStyle,
        headerTextStyle,
        smallTextStyle,
        thumbContainerStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbContainerStyle}>
                    <Image
                        style={thumbStyle}
                        source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                    />
                </View>
                <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{id}</Text>
                <Text style={smallTextStyle}>{hashrate} (current)</Text>
                <Text style={smallTextStyle}>{avg_h24} (24h average)</Text>
                </View>
            </CardSection>
        </Card>

    );
}

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize:18
    },
    smallTextStyle: {
        fontSize:12
    },
    thumbStyle: {
        height: 50,
        width: 50,
    },
    thumbContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
}

export default RigDetail;