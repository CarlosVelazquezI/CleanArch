import { observable, makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from "react";
import InputRadius from './components/inputRadius';
import { Text } from 'react-native';
import { userViewModel } from '../screens/user/userViewModel';
import { container } from '../../inversify.config';
import ButtonColor from './components/buttonColor';


class CoreScreen extends Component {
    constructor(props: { jsonInput: any } | Readonly<{}>) {
        super(props);
        this.state = {
            jsonInput: this.props.jsonInput ,
        }
    }

    render() {
        const state = this.state;
        const { jsonInput } : any = this.state;

        return (
            <>
                {
                    jsonInput != undefined ?
                        jsonInput.map((item : any, index : number) => {
                            return (
                                item.id == "InputRadius" ? <InputRadius key={index} jsonIn={item} />
                                : item.id == "Button" ? <ButtonColor key={index} jsonIn={ item }  />
                                : null
                            )
                        })
                        : null

                }
            </>
        )

    }

}

export default observer(CoreScreen);