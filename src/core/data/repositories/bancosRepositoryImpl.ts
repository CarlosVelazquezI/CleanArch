import { inject, injectable } from 'inversify';
import { bancos } from '../../domain/entities/bancos';
import { bancosRepository } from '../../domain/repositories/bancosRepository';
import { bankServices } from '../services/bankServices';


@injectable()
class bancosRepositoryImpl implements bancosRepository{

  constructor(@inject('bankServices') private bank : bankServices ){}

    async getBancos(): Promise<bancos[]> {
        try{
            const user = this.bank.fetchListBanks();
            return user;

        }catch(error){
            throw new Error('Method not implemented.');

        };
        
    }
}

export default bancosRepositoryImpl;