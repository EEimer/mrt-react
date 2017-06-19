import React, {Component } from "react"
import {ScrollView} from "react-native"
import axios from "axios"
import RigDetail from "./RigDetail"
class RigList extends Component{

    state = { rigs: [] }

    componentDidMount(){
        console.log("mounted")
        axios.get('https://api.nanopool.org/v1/eth/user/0x2df794A0a6E1b9C85D872818c1037B1B61C0f6c0')
            .then(response => this.setState({ rigs: response.data.data.workers}))
    }

    renderRigs() {
        return this.state.rigs.map(rig => <RigDetail key={rig.id} rig={rig}></RigDetail>)
    }

    render(){
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderRigs()}
            </ScrollView>
        )
    }
}


export default RigList;