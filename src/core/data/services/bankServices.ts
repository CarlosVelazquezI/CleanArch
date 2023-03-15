import { inject, injectable } from "inversify";
import { bancos } from '../../domain/entities/bancos';
import * as http from "../network/http";

@injectable()
export class bankServices {

    constructor(@inject('HttpManager') private http : http.HttpManager ){}

    async fetchListBanks(): Promise<bancos[]>{
        const data = await this.http.get("/challenge/banks");
        const bank: bancos[] = data.data;
        return bank;
    }

}
