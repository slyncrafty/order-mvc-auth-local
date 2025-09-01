# Coffee Order Management App

## Introduction

A Simple Coffee Order Management App is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up and log in to view and manage the orders.

---

![App demo]()

---

## How It's Made:

**Tech used:** bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator and more.

This application was built using a modern web development stack. Node.js with Express provides a robust server framework for handling model, view, routes, middleware, and authentication. MongoDB stores uer profiles and the story data with mongoose to define schemas. PassportJS library was used for maintaining session information fo authenticated users. Passport Local was used to authenticate users using a login email and password saved on MongoDB database(local strategy).

## How to use:

- Create a `/config/.env` file and add the following as `key: value`
  - PORT: 2121 (can be any port example: 3000)
  - DB_STRING: `your database URI`

---

```
# Install npm dependencies
npm install

# Run app
npm start
```

## Lessons Learned:

- Building a node app with some complex features
- Passport used to maintain session information for authenticated users.
- Passport Local strategy: using passport-local strategy for authenticating the users.

## Optimization

- Add time-elapsed since the order was taken
- Add special request/notes to order
