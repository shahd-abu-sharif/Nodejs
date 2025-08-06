# Nodejs
# Task 6 – Basic HTTP Server with JSON Response

## Description

This project is a simple Node.js HTTP server built using the native `http` module without any external frameworks.  
It handles incoming requests and returns JSON responses based on the route.

## Features

- Built with the built-in `http` module  
- Listens on port `3000`  
- Handles the following routes:
  - `GET /` → `{ message: "Welcome to the server" }`
  - `GET /about` → `{ message: "This is the about route" }`
  - `GET /contact` → `{ message: "This is the contact route" }`
  - Any other route → `{ error: "Route not found" }` with a 404 status

## Usage

1. Clone the repository  
2. Run the server:

for `Task6.ts`
   ```bash
   npx tsx Task6.ts

```
for `additional.ts`
  ```bash
    npx tsx additional.ts
```
