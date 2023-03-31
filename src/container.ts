import "reflect-metadata";
import {Container} from "inversify";
import {MockRepository} from "./Infrastructure/Repositories/MockRepository/MockRepository";
import {diAliases} from "./diAliases";
import {IMockRepository} from "./Infrastructure/Interfaces/IMockRepository";
import {IPostManager} from "./Business/Interfaces/IPostManager";
import {PostManager} from "./Business/PostManager/PostManager";
import {PostManagementBusinessProcess} from "./BusinessProcesses/PostManagement/PostManagementBusinessProcess";
import axios, {Axios, AxiosInstance} from "axios";

const container = new Container();

/** start_utility */
container.bind<AxiosInstance>(diAliases.Axios).toDynamicValue(() => axios.create());
/** end_utility */

/** start_Posts */
container.bind<IMockRepository>(diAliases.IMockRepository).to(MockRepository);
container.bind<IPostManager>(diAliases.IPostManager).to(PostManager);
/** end_Posts */

/** start_businessProcesses */
container.bind<PostManagementBusinessProcess>(diAliases.PostManagementBusinessProcess).to(PostManagementBusinessProcess).inSingletonScope();
/** end_businessProcesses */
export {container};