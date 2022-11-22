import { injectable } from 'inversify';
import { usuario } from '../entities/usuario';


export interface usuarioRepository {
    getUsuario(): Promise<usuario>;
    setUsuario( usuario: usuario): Promise<void>;

}