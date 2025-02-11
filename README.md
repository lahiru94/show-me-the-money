# Show Me The Money

## Webapp
- The webapp is built using Next.js and TypeScript.
- Testing is setup using Vitest and React Testing Library. Run `npm test` to run the tests.

## Backend
- The backend is built using Node, Express and TypeScript.
- Nodemon is used for the dev server to watch for changes in the code and automatically restart the application.
- Testing is setup using Vitest. Run `npm test` to run the tests.

## Containerization
- Application is containerized using docker compose for the development setup. (no production ready)
- Run `docker compose up` to start the application.
- This will start the xero mock server, backend and frontend.
- The webapp will be available at `http://localhost:3002`
- The backend will be available at `http://localhost:3001`
- The xero mock server will be available at `http://localhost:3000`
- This setup will watch for changes in both webapp and backend source codes and automatically restart the application.
- To run the tests for the webapp, run `docker-compose exec show-me-the-money-webapp npm test`
- To run the tests for the backend, run `docker-compose exec show-me-the-money-backend npm test`