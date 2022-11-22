import { inject, injectable } from 'inversify';
import { usuario } from '../../domain/entities/usuario';
import { usuarioRepository } from '../../domain/repositories/usuarioRepository';


@injectable()
class usuarioRepositoryImpl implements usuarioRepository{

    async getUsuario(): Promise<usuario> {
        try{
            const user = new usuario({
                id: 1,
                nombre: "Ivan",
                apellidoPaterno: "Velazquez",
                edad: 30,
                fechaRegistro: '07/09/2022'
            });
           
            return user;

        }catch(error){
            throw new Error('Method not implemented.');

        };
        
    }
    async setUsuario(usuario: usuario): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

export default usuarioRepositoryImpl;