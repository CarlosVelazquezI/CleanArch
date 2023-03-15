import { injectable, inject, Container } from "inversify";
import * as bank from '../../repositories/bancosRepository';
import { Usecase } from '../useCase';


@injectable()
class getAllBanks implements Usecase<object[]>{

    constructor(
        @inject('bancosRepository') private repository: bank.bancosRepository,
    ){}     

    async run(): Promise<object[]>{
        const bancos = await this.repository.getBancos();
        const dataBank: object[] = [];
        bancos.map((item, index) =>{
            dataBank.push({
                id: index,
                data: [
                    {
                        title: "Bank:",
                        description: item.bankName,
                        backgroundColor: 'blue',
                        cabecera: true
                    },
                    {
                        title: "description:",
                        description: item.description
                    },
                    {
                        title: "age:",
                        description: item.age
                    },
                    {
                        title: "url:",
                        description: item.url
                    }    
                ]
           });

        });


        
        return Promise.resolve(dataBank);
    }
}

export { getAllBanks };
