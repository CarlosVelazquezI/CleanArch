import { observer } from 'mobx-react';
import { container } from '../../../inversify.config';
import "reflect-metadata";
import { userViewModel } from '../user/userViewModel';
import { observable, makeObservable, computed, action } from 'mobx';
import { coreViewModel } from '../../coreUI/coreViewModel';

const view = container.get<userViewModel>('userViewModel');


class login {
  @observable _loginJson : any = [];


  constructor(){
    makeObservable(this);
  }


  @computed
  get loginJson(){
    return this._loginJson
  }

  @action
  setLogin(){
    this._loginJson = [
      {
        id: "InputRadius",
        text: () => view.pass,
        title: "User:",
        paddingTop: 20,
        onchange: (val : any) => view.setUser(val),
      },
      {
        id: "InputRadius",
        text: () => view.user,
        title: "Password:",
        paddingTop: 20,
        onchange: (val : any) => view.setPass(val),

  
      },
      {
        id: "Button",
        title: "Save",
        colorText:"#fff",
        colorButton:"blue",
        onpress: () => {view.saveData();}
  
      },
      {
        id: "Button",
        title: "Clean",
        colorText:"#fff",
        colorButton:"blue",
        onpress: () => { view.cleanData() }
  
      },
   
    
     
    ];
  }

  
}



  export default login ;