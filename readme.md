# Dolitask

### Technologies Used

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Description

This project began as a work-related initiative aimed at using the Dolibarr API to create a more intuitive front-end with enhanced UX for displaying pending tasks to the development team. From that initial idea, I decided to develop a personal project with more functionalities and a custom API.

Currently, the project includes or will include:
- Configurable role system with fine-grained permissions
- Project management system
- Task management system for projects
- Document upload for tasks
- Task notifications

## Considerations

At present, the front-end is a mock-up of what the project was originally intended to be. It is not connected to the API, and I need to either modify it to adapt to the current project requirements or completely redo it. I have not yet made a decision on this.

## How to Run the Project

**Clone the repository**
    ```
    git clone https://github.com/JuampiJuguera/Dolitask.git
    ```

### API

1. **Install dependencies**
    ```
    npm install
    ```

2. **Set up the environment variables**
    Create a `.env` file in the root directory and configure the necessary environment variables:
    ```plaintext
    DATABASE_URL=""
    JWT_ACCESS_SECRET=""
    JWT_REFRESH_SECRET=""

    PORT = // port where you want to run your server
    ```

3. **Run the Prisma migrations**
    ```sh
    npm prisma migrate
    ```

4. **Build and run the database using Docker**
    ```sh
    docker-compose up --build
    ```

5. **Run the API server**
    ```sh
    npm run dev
    ```

### WEB

1. **Go to frontend folder**
    ```sh
    cd frontend
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Run the frontend**
    ```sh
    npm run dev
    ```

## Upcoming Features

- [x] **Advanced role-based access control**: More granular permissions and role configurations.
- [x] **Enhanced project administration**: Additional tools and features for managing projects.
- [ ] **Improved task management**: More options and functionalities for handling project tasks. **In progress**
- [ ] **Document upload capabilities**: Better integration and handling of task-related documents.
- [ ] **Real-time notifications**: Immediate alerts and updates for task changes and project activities.
- [ ] **Change front**: I'll probably use Next instead of React, and I'll use ui.shadcn instead of MUI as a component library.
- [ ] **Change front**: as I change the functionality of the project itself, I have to change the front end almost entirely.
