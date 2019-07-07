import * as storage from '../storage';

export default function store(req, res) {
  const projects = storage.load();
  const { id } = req.params;
  const { task } = req.body;

  const currentProject = projects.find(project => project.id === id);

  if (!currentProject) {
    return res.status(404).json({ error: 'Project not found' });
  }

  currentProject.tasks.push(task);

  storage.save(projects);

  return res.status(200).json(currentProject);
}
