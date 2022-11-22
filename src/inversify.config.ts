// file inversify.config.ts

import { Container } from "inversify";
import usuarioRepositoryImpl from "./core/data/repositories/usuarioRepositoryImpl";
import { usuarioRepository } from "./core/domain/repositories/usuarioRepository";
import { getAllUsers } from "./core/domain/useCases/getAllUsers";
import { coreViewModel } from './ui/coreUI/coreViewModel';
import { userViewModel } from "./ui/screens/user/userViewModel";

 const container = new Container();

// //UseCases
 container.bind<getAllUsers>('getAllUsers').to(getAllUsers);


//Repositories
 container.bind<usuarioRepository>('usuarioRepository').to(usuarioRepositoryImpl);


//ViewModels

 container.bind<userViewModel>('userViewModel').to(userViewModel).inSingletonScope();

//CoreUiViewModel

container.bind<coreViewModel>('coreViewModel').to(coreViewModel).inSingletonScope();

export  {  container };


