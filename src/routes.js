import { Router } from 'express';
import * as ProjectController from './controllers/ProjectController';

const routes = new Router();

routes.get('/', ProjectController.store);

module.exports = routes;
