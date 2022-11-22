import { injectable, inject, Container } from "inversify";
import { usuario } from "../../entities/usuario";
import { usuarioRepository } from '../../repositories/usuarioRepository';
import { Usecase } from '../useCase';


@injectable()
class getAllUsers implements Usecase<usuarioRepository>{

    constructor(
        @inject('usuarioRepository') private repository: usuarioRepository
        ){ 
    }

    async run(): Promise<usuario>{
        const usuario = await this.repository.getUsuario();
        return Promise.resolve(usuario);
    }



}

export { getAllUsers };
