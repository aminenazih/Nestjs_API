<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 # NestJS MongoDB API

A RESTful API built with NestJS and MongoDB for managing users and posts.

## Features

- CRUD operations for users
- MongoDB integration using Mongoose
- Validation using class-validator
- Global exception handling
- Environment configuration

## Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nestjs-api-challenge.git
cd nestjs-api-challenge
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.example.mongodb.net/nest-challenge?retryWrites=true&w=majority
```

## Running the application

```bash
# development mode
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

The application will start on http://localhost:3000 by default.

## API Endpoints

### Users

- `GET /users` - Get all users
- `GET /users/:id` - Get a specific user
- `POST /users` - Create a new user
- `PATCH /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

### Example Requests

#### Creating a user
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }'
```

#### Getting all users
```bash
curl http://localhost:3000/users
```

## Project Structure

```
src/
├── common/              # Common utilities, filters, etc.
├── users/               # Users module
│   ├── dto/             # Data Transfer Objects
│   ├── entities/        # MongoDB schemas
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── posts/               # Posts module
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## License

This project is [MIT licensed](LICENSE). 
