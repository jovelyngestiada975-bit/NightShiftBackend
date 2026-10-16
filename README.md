\# NightShift.exe Backend API



\## Project Description

NightShift.exe is a survival horror game. This backend project provides an Express.js API and a PostgreSQL database for storing player information, game sessions, night progress, camera event logs, and scores.



\## Technologies Used

\- Node.js

\- Express.js

\- PostgreSQL

\- Sequelize ORM

\- Sequelize CLI

\- dotenv



\## Requirements

\- Node.js

\- PostgreSQL



\## Setup Instructions

1\. Install project dependencies:



&#x20;  `npm install`



2\. Create a `.env` file in the project root with the following variables:



&#x20;  `PORT=3001`  

&#x20;  `DB\_HOST=localhost`  

&#x20;  `DB\_PORT=5432`  

&#x20;  `DB\_NAME=nightshift\_dev`  

&#x20;  `DB\_USER=postgres`  

&#x20;  `DB\_PASSWORD=your\_local\_password`



3\. Create the database:



&#x20;  `npm run db:create`



4\. Run database migrations:



&#x20;  `npm run db:migrate`



5\. Insert demo data:



&#x20;  `npm run db:seed`



6\. Check database connection and records:



&#x20;  `npm run db:check`



7\. Start the API server:



&#x20;  `npm run dev`



\## API Endpoints



\### GET /health

Checks the API's database connection.



\### GET /game-info

Returns basic information about NightShift.exe.



\### GET /api/v1/health

Versioned health-check endpoint.



\### GET /api/v1/game-info

Versioned game-information endpoint.



\## Database Tables

\- `players`

\- `game\_sessions`

\- `nights`

\- `camera\_event\_logs`

\- `scores`



\## Demo Data

The seed script inserts one demo record into each database table.



\## Security

The `.env` file contains local database credentials and must not be committed to Git.



\## Project Status

Database migrations and demo-data seeding completed successfully. Database connection and record counts verified using `npm run db:check`.



