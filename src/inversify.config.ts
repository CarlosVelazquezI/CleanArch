// file inversify.config.ts

import { Container } from "inversify";
import { HttpManager, AxiosHttpManager } from './core/data/network/http';
import bancosRepositoryImpl from "./core/data/repositories/bancosRepositoryImpl";
import { bankServices } from "./core/data/services/bankServices";
import { bancosRepository } from "./core/domain/repositories/bancosRepository";
import { getAllBanks } from "./core/domain/useCases/getAllBanks";
import { HomeViewModel } from "./ui/screens/home/HomeViewModel";

 const container = new Container();

// //UseCases
 container.bind<getAllBanks>('getAllUsers').to(getAllBanks);


//Repositories
 container.bind<bancosRepository>('bancosRepository').to(bancosRepositoryImpl);


//ViewModels

 container.bind<HomeViewModel>('HomeViewModel').to(HomeViewModel).inSingletonScope();

//Network

container.bind<HttpManager>('HttpManager').to(AxiosHttpManager).inSingletonScope();

//Services

container.bind<bankServices>('bankServices').to(bankServices);

export  {  container };


