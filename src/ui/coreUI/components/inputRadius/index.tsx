
import { observer } from "mobx-react";
import React,{ useEffect} from "react";
import { TextInput, Text, View } from 'react-native';
import { styles } from "./styles";
import { container } from "../../../../inversify.config";
import { coreViewModel } from "../../coreViewModel";




const InputRadius = (props: { jsonIn: any; } ) => {

    const jsonIn = props.jsonIn;

   


    console.log("jsonIn ==>", jsonIn.text)
    
    return (
        props.jsonIn == undefined ? null :
        <View style={ [
            // {
            //     paddingVertical: props.paddingVertical || 0,
            //     //paddingTop: props.paddingVertical/2 || (props.paddingTop || 0),
   
            // }
        ]}>
            <Text style={ styles.text }>{jsonIn.title}</Text>
            <TextInput
                style={styles.input}
                onChangeText={ (val) => {  jsonIn.onchange(val); }}
                value={   jsonIn.text }

            />
        </View>
    );

}

export default observer(InputRadius);


