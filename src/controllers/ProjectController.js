import * as storage from '../storage';

export function store(req, res) {
  const projects = storage.load();
  const { id, title, tasks } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Missing id' });
  }

  const projectExists = projects.find(project => project.id === id);

  if (projectExists) {
    return res.status(400).json({ error: 'This ID is already in use' });
  }

  const newProject = {
    id,
    title: title || `Novo projeto (${id})`,
    tasks: tasks || [],
  };

  projects.push(newProject);
  storage.save(projects);

  return res.status(201).json(newProject);
}

export function index(req, res) {
  const projects = storage.load();
  return res.json(projects);
}

export function show(req, res) {
  const projects = storage.load();
  const { id } = req.params;

  const currentProject = projects.find(project => project.id === id);

  if (!currentProject) {
    return res.status(404).json({ error: 'Project not found' });
  }

  return res.status(200).json(currentProject);
}

export function update(req, res) {
  let projects = storage.load();
  const { id } = req.params;

  const currentProject = projects.find(project => project.id === id);

  if (!currentProject) {
    return res.status(404).json({ error: 'Project not found' });
  }

  const updatedProject = { ...currentProject, ...req.body };

  projects = projects.map(project => (project.id === id ? updatedProject : project));
  storage.save(projects);

  return res.status(200).json(updatedProject);
}

export function remove(req, res) {
  let projects = storage.load();
  const { id } = req.params;

  const currentProject = projects.find(project => project.id === id);

  if (!currentProject) {
    return res.status(404).json({ error: 'Project not found' });
  }

  projects = projects.filter(project => project.id !== id);

  storage.save(projects);

  return res.status(200).json({ success: 'Project removed' });
}
