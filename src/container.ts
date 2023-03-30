import "reflect-metadata";
import {Container} from "inversify";
import {MockRepository} from "./Infrastructure/Repositories/MockRepository/MockRepository";
import {diAliases} from "./diAliases";
import {IMockRepository} from "./Infrastructure/Interfaces/IMockRepository";
import {IPostManager} from "./Business/Interfaces/IPostManager";
import {PostManager} from "./Business/PostManager/PostManager";
import {PostManagementBusinessProcess} from "./BusinessProcesses/PostManagement/PostManagementBusinessProcess";

const container = new Container();

/** start_Posts */
container.bind<IMockRepository>(diAliases.IMockRepository).to(MockRepository);
container.bind<IPostManager>(diAliases.IPostManager).to(PostManager);
/** end_Posts */

/** start_businessProcesses */
container.bind<PostManagementBusinessProcess>(diAliases.PostManagementBusinessProcess).to(PostManagementBusinessProcess).inSingletonScope();
/** end_businessProcesses */
export {container};