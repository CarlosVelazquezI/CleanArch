import { injectable } from 'inversify';
import { bancos } from '../entities/bancos';


export interface bancosRepository {
    getBancos(): Promise<bancos[]>;

}