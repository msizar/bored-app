# Server and Client Repository

This repository contains two folders: `server` and `client`. The `server` folder contains the Node.js and MongoDB server, while the `client` folder contains the Next.js and Tailwind CSS client.

# Server

The server folder houses the backend code written in Node.js and uses MongoDB for data storage. It utilizes the following technologies and dependencies:

- Express: A minimal and flexible web application framework for Node.js.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in the server.
- Ensure you are on Node version 16.*

To set up the server, follow these steps:

1. Install dependencies:
   ```shell
   cd server
   npm install


2. Start the server::
   ```shell
   npm start

The server will run on http://localhost:8000 by default.


# Client
The client folder contains the frontend code built with Next.js and styled with Tailwind CSS. It provides a user interface to interact with the server's APIs. The following technologies and dependencies are used:

Next.js: A React framework for building server-rendered applications.
Tailwind CSS: A utility-first CSS framework for rapid UI development.

To set up the client, follow these steps:


1. Install dependencies:
   ```shell
   cd client
   npm install
  
2. Start the development server:
   ```shell
   npm run dev

The client will run on http://localhost:3000 by default.
