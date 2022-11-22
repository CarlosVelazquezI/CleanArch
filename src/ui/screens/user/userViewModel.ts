import { inject, injectable } from "inversify";
import { action, computed, makeObservable, observable } from "mobx";
import { Alert } from "react-native";
import { getAllUsers } from "../../../core/domain/useCases/getAllUsers";
import { container } from "../../../inversify.config";
import { coreViewModel } from "../../coreUI/coreViewModel";


@injectable()
class userViewModel{
    @observable isLoading : boolean = true;
    @observable _nombre : string = "Text";
    @observable _user : string = "";
    @observable _pass : string = "";
    

    constructor(
        @inject('getAllUsers') private allUsers: getAllUsers
    ){
        makeObservable(this);
    }

    @action
    setIsLoading(val: boolean){
        this.isLoading = val;

    }

    @computed
    get loading(){
        return this.isLoading
    }

    @action
    setNombre(val : string){
        
        this.allUsers.run().then(user =>{
            console.log("user==>",user);
        }).catch( error =>{
            console.log(error);
        });
         this._nombre = val;
    }

    @computed
    get nombre(){
        return this._nombre;
    }

    @action
    setUser( val : string){
        this._user = val;
    }

    @computed
    get user(){
        return this._user;
    }

    @action
    setPass( val : string){
        this._pass = val;

    } 

    @computed
    get pass(){
        return this._pass;
    }

    @action
    saveData(){
        console.log("user =>", this._user);
        console.log("pass =>", this._pass);
    }

    @action
    cleanData(){
       this._user="";
       this._pass="";
    }


}


export { userViewModel };