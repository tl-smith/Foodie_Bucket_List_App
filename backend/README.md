# Wander Bite: Backend Setup Instructions
> Documentation for what is in the folder, the purpose of each file and how to start up the local backend folder environment.

## Backend Folder Contents

- `db/index.js` - Prisma Client
- `middleware/auth.js` - Authentication Middleware
- `prisma/schema.prisma` - Wander Bite Data Schemas
- `prisma/migrations` - Schema Configuration History
- `routes/bucketList.js` - All Endpoints Starting with `/bucket-lists`
- `server.js` - Local Host Server Configuration
- `.env.example` - Environment Variables Needed
- `package.json` - Dependency List
- `README.md` - This Document

## Getting Started

### Prerequisites

The things you need before installing the software.

* LTS version of Node installed
* Supabase database made solely for this project
* A terminal
* A code editor if you plan on inspecting, editing, or contributing to the code.

### Installation

A step by step guide that will tell you how to get all packages necessary installed.

```
$ git clone https://github.com/tl-smith/WanderBite.git
$ cd WanderBite
$ cd backend
$ npm install
```

#### Create a New Backend `.env` file
In the `WanderBite/backend/` folder, type the following into the terminal: 
```
$ cat .env.example > .env
```
This command will create a `.env` file and copy the variable names from the `.env.example` file into your file. Then retrieve the actual keys from the known channel and add them to the `.env` file.

### Start the Backend Server
In the terminal, run the following command:
```
$ npm run dev
```
The terminal will print out the link that the API is accessible in. If the frontend server is also running, you will not need that link. If it isn't, feel free to test the API endpoints that are listed below in either Postman or your API tester of choice.

## Wander Bite API Documentation

### `/bucket-lists` endpoints

**GET** `/bucket-lists`
> Get a list of all bucket lists

**POST** `/bucket-lists`
> Create a new bucket list

**GET** `/bucket-lists/:bucketListId`
> Get a specific bucket list

**PUT** `/bucket-lists/:bucketListId/completed`
> Mark a specific bucket list as completed

**PUT** `/bucket-lists/:bucketListId/not-completed`
> Mark a specific bucket list as not completed

**DELETE** `/bucket-lists/:bucketListId`
> Delete a specific bucket list

### `bucket-lists/:bucketListId/items` endpoints

**GET** `/bucket-lists/:bucketListId/items`
> Get all items from a specific bucket list

**POST** `/bucket-lists/:bucketListId/items`
> Create a new item for a specific bucket list

**PUT** `/bucket-lists/:bucketListId/items/:itemId/completed`
> Mark a specific bucket list item as completed

**PUT** `/bucket-lists/:bucketListId/items/:itemId/not-completed`
> Mark a specific bucket list item as not complete

**DELETE** `/bucket-lists/:bucketListId/items/:itemId`
> Delete a specific item in a bucket list

### Branches

* Main: The branch with the latest stable version of the application.
* Dev: The branch with the latest development version of the application.
* Feature-*: Branches covering different features necessary for the application

