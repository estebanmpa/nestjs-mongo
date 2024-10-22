# NestJs Mongo Example Server

### Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Run](#local-run)
- [Docker Hub Images](#dockerhubimages)
- [Endpoints](#endpoints)
  - [Prerequisites](#prerequisites)
- [Nice to Have](#nice-to-have)

### About The Project
Example development of a REST api using NestJS framework with the next features:
1. Class Validator.
2. MongoDB support.
3. Basic Clean Code.
4. NestJs Configuration for environment variables.
5. Docker support.
6. Pagination for better response times.
7. Unit Tests. **pending**
8. Github Actions to deploy to a cloud server.
9. Github Actions to build and push docker image to dockerhub for scalability.

### Getting Started

#### Prerequisites
1. This project requires Yarn and NodeJs to be installed in your system.
2. Create **.env.local** environment variables file for local run:
```
LISTEN_PORT=3001
MONGO_CONNECTION_STRING=mongodb://mongouser:p4ssw0rd@mongo:27017/nestmongodb
```

#### Local Run
This proyect has docker compose support to run in local. Run this command to launch with hot reaload enabled.
```
docker compose up --build
```

### Docker Hub Images
https://hub.docker.com/r/estebanmpa/nestjs-mongodb-api

### Endpoints
#### GET
http://localhost:3001/api/product/?pageSize=1&page=2

### Nice To Have
Some features to improve this code:
1. Basic JWT authenticaton to securitize the endpoints.
2. Swagger for documentation.