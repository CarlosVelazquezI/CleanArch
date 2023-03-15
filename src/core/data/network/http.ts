import { inject, injectable } from "inversify";
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface HttpManager {
    get(url: string) : Promise<any>;
    post(url: string, body: object) : Promise<any>;
}

@injectable()
export class AxiosHttpManager implements HttpManager{
    private http : AxiosInstance;

    constructor(){
        this.http = axios.create({
            baseURL: 'https://dev.obtenmas.com/catom/api'
        })
    }

    get(url: string): Promise<AxiosResponse> {
        return this.http.get(url);
    }
    post(url: string, body: object): Promise<AxiosResponse> {
        return this.http.post(url, body);
    }

}
