import { inject, injectable } from "inversify";
import { action, computed, makeObservable, observable, autorun } from 'mobx';
import { getAllBanks } from "../../../core/domain/useCases/getAllBanks";

@injectable()
class HomeViewModel {
    @observable isLoading: boolean = true;
    @observable _data: Object[] = [];
    @observable _nombre: string = "";


    constructor(
        @inject('getAllUsers') private allUsers: getAllBanks
    ) {
        makeObservable(this);
        this.getData();
    }

    async getData() {
        const space = this.allUsers.run().then((resp) => {
            this.setData(resp);
        });
    }


    @action
    setNombre(val: string) {
        this._nombre = val;
    }

    @action
    setData(val: Object[]) {
        this._data = val;
    }

    @action
    setIsLoading(val: boolean) {
        this.isLoading = val;

    }

    @computed
    get data() {
        return this._data;
    }

    @computed
    get loading() {
        return this.isLoading
    }

    @computed
    get nombre() {
        return this._nombre;
    }
}

export { HomeViewModel };