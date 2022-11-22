
import { observer } from "mobx-react";
import React from "react";
import { TextInput, Text, View } from 'react-native';
import { styles } from "./styles";
import { useState } from 'react';
import { userViewModel } from "../../../screens/user/userViewModel";
import { container } from "../../../../inversify.config";
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonColor = (props: { jsonIn: any; } ) => {

    const [ text, setText ] = useState("");


    const saveData = () =>{

        props.jsonIn.onpress();
    }

    return (
        props.jsonIn == undefined ? null :
        <TouchableOpacity style={ [styles.button,{ backgroundColor: props.jsonIn.colorButton}]} onPress={ () => saveData()}>
            <Text style={ [styles.text, { color: props.jsonIn.colorText} ]}>{props.jsonIn.title}</Text>
        </TouchableOpacity> 


    );
}


export default observer(ButtonColor);


