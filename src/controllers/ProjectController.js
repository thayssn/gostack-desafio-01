import * as storage from '../storage';

export function store(req, res) {
  const projects = storage.load();
  const { id, title, tasks } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Missing id' });
  }
  if (projects.find(project => id === project.id)) {
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

export function show(req, res) {
  return res.json();
}

export function update(req, res) {
  return res.json();
}

export function remove(req, res) {
  return res.json();
}
