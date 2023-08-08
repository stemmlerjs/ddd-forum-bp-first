import { UserController } from '../../modules/users/userController';
import { WebServer } from '../server/webServer';

export class CompositionRoot {
  private webServer: WebServer;
  private userController: UserController;

  constructor() {
    this.userController = this.createUserController();
    this.webServer = this.createWebServer();
  }

  createUserController() {
    return new UserController();
  }

  getUserController() {
    return this.userController;
  }

  createWebServer() {
    const userController = this.getUserController();
    return new WebServer({ port: 3000 }, userController);
  }

  getWebServer() {
    return this.webServer;
  }
}
