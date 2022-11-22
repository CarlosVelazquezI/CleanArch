import { inject, injectable } from "inversify";
import { action, computed, makeObservable, observable } from "mobx";
import { Alert } from "react-native";


@injectable()
class coreViewModel{
 
    @observable _textInputValue : boolean = false;
    

    constructor(){
        makeObservable(this);
        

    }


    @action
    setInputValue(val : boolean){
       this._textInputValue = val;
    }

    @computed
    get textInputValue(){
        return this._textInputValue;
    }

}


export { coreViewModel };