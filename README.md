# rest-api-ts

## About it.

The repository contains a simple REST API CRUD(Create, Read, Update, Delete) by NestJS and TypeScript.

## Technologies.

> [NodeJS](https://nodejs.org/en)
>
> [NestJS](https://docs.nestjs.com/)
>
> [TypeScript](https://www.typescriptlang.org/)
>
> [Docker & Docker-compose](https://www.docker.com/)
>
> [PostgreSQL](https://www.postgresql.org/)



## Usage.
### Local.

Change the .development.env file:
```
POSTGRES_HOST=localhost
```

Install dependencies:
```
npm install
```

Run app:
```
npm run start:dev
```
### Docker.

Change the .development.env file:
```
POSTGRES_HOST=db
```

Run docker-compose:
```
docker-compose up -d --build
```