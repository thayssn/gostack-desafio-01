# GoStack - Desafio 01

Uma api para gerenciar projetos com tarefas.


## Instalação

```
yarn
```

## Servidor

```
yarn start
```

## Como usar

### Criar novos projetos
```curl
POST /projects
```
```json
{
	"id": "",
	"title": "",
	"tasks" : []
}
```

### Listar todos os projetos
```curl
GET /projects
```

### Listar um projeto
```curl
GET /projects/id
```

### Atualizar um projeto
```curl
PUT /projects/id
```
```json
{
	"id": "",
	"title": "",
	"tasks" : []
}
```

### Deletar um projeto
```curl
DELETE /projects/id
```

### Criar tasks para um projeto
```curl
POST /projects/id/tasks
```
```json
{
	"task": "",
}
```
