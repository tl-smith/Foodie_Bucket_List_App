# Wander Bite: Backend Setup Instructions
> Documentation for what is in the folder, the purpose of each file and how to start up the local backend folder environment.

## Backend Folder Contents

- Prisma Client: `db/index.js`
- Authentication Middleware: `middleware/auth.js`
- Wander Bite Data Schemas: `prisma/schema.prisma`
- Schema Configuration History: `prisma/migrations`
- All Endpoints Starting with `/bucket-lists`: `routes/bucketList.js`
- Local Host Server Configuration: `server.js`
- Environment Variables Needed: `.env.example`
- Dependency List: `package.json`
- This Document: `README.md`

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
$ npx prisma db push
$ npm run dev
```
### Generate New Data
#### Create a new SQLite file
From the `intro-to-prisma` folder
```
$ cd backend/prisma
$ touch test.sqlite
```

#### Connect to SQLite database
1. Click on SQLTools extension icon (looks like a cylinder).
2. Click on cylinder plus icon to **Add New Connection**.
3. Choose the SQLite (Node) driver.
4. Type in name for **Connection name**, such as *test*.
5. Type in relative file path to your `test.sqlite` file.
6. Click **Test Connection**, and if it works, click **Save Connection**.
7. Then click, **Connect Now**. Now you have an active SQLite database through VSCode.

#### Create a New Prisma `.env` File
In the `intro-to-prisma/backend/prisma` folder, type the following into the terminal: 
```
$ echo 'DATABASE_URL="file:test.sqlite"' >> .env
```
This command will add the link to your SQLite database as an environment variable in the `.env` folder, which Prisma will need to communicate with the database.

#### Populate Database with Data
Enter these commands in the terminal while in the `intro-to-prisma/backend/prisma` folder:
```
$ npx prisma migrate dev
$ node seed.js
```
These commands will apply the Prisma schemas to your SQLite database, and then populate the database with new data via the `seed.js` file.

### Run Application
1. Open up two terminals.
2. In the first terminal, navigate to the `intro-to-prisma/backend` folder and run the following command:
```
$ node server.js
```
The terminal will print out the link that the API is accessible in. You will not need that link.

3. In the other terminal, navigate to the `intro-to-prisma/frontend` folder and run the following command:
```
npm run dev
```
The terminal will print out the link where the website is hosted. Click on that link and you should see the full site there.

### Branches

* Main: The branch with the latest stable version of the application.
* Dev: The branch with the latest development version of the application.
* Feature-*: Branches covering different features necessary for the application
