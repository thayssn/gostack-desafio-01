import * as storage from '../storage';

export default function verifyProject(req, res, next) {
  const projects = storage.load();
  const { id } = req.params;
  console.log('=======', req);

  const currentProject = projects.find(project => project.id === id);

  if (!currentProject) {
    return res.status(404).json({ error: 'Project not found.' });
  }

  return next();
}
