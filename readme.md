# Dolitask

## Description

This project began as a work-related initiative aimed at using the Dolibarr API to create a more intuitive front-end with enhanced UX for displaying pending tasks to the development team. From that initial idea, I decided to develop a personal project with more functionalities and a custom API.

Currently, the project includes or will include:
- Configurable role system with fine-grained permissions
- Project management system
- Task management system for projects
- Document upload for tasks
- Task notifications

### Technologies Used

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## How to Run the Project

1. **Clone the repository**
    ```sh
    git clone https://github.com/JuampiJuguera/Dolitask.git
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Set up the environment variables**
    Create a `.env` file in the root directory and configure the necessary environment variables:
    ```plaintext
    DATABASE_URL=""
    JWT_ACCESS_SECRET=""
    JWT_REFRESH_SECRET=""

    PORT = // port where you want to run your server
    ```

4. **Run the Prisma migrations**
    ```sh
    npm prisma migrate
    ```

5. **Build and run the project using Docker**
    ```sh
    docker-compose up --build
    ```

6. **Access the application**
    Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Upcoming Features

- [x] **Advanced role-based access control**: More granular permissions and role configurations.
- [x] **Enhanced project administration**: Additional tools and features for managing projects.
- [ ] **Improved task management**: More options and functionalities for handling project tasks.
- [ ] **Document upload capabilities**: Better integration and handling of task-related documents.
- [ ] **Real-time notifications**: Immediate alerts and updates for task changes and project activities.
- [ ] **Change front - I'll probably use Next instead of React, and I'll use ui.shadcn instead of MUI as a component library.
- [ ] **Change front - as I change the functionality of the project itself, I have to change the front end almost entirely.