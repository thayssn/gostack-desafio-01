import { Router } from 'express';
import * as ProjectController from './controllers/ProjectController';
import TaskController from './controllers/TaskController';

const routes = new Router();

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.get('/projects/:id', ProjectController.show);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.remove);

routes.post('/projects/:id/tasks', TaskController);

module.exports = routes;
