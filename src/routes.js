import { Router } from 'express';
import * as ProjectController from './controllers/ProjectController';

const routes = new Router();

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.get('/projects/:id', ProjectController.show);
routes.put('/projects/:id', ProjectController.update);

module.exports = routes;
