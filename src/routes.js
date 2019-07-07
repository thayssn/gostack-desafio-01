import { Router } from 'express';
import * as ProjectController from './controllers/ProjectController';
import TaskController from './controllers/TaskController';

import checkIfProjectExists from './middlewares/verifyProject';
import log from './middlewares/log';

const routes = new Router();

routes.use(log);
routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.get('/projects/:id', checkIfProjectExists, ProjectController.show);
routes.put('/projects/:id', checkIfProjectExists, ProjectController.update);
routes.delete('/projects/:id', checkIfProjectExists, ProjectController.remove);

routes.post('/projects/:id/tasks', checkIfProjectExists, TaskController);

module.exports = routes;
