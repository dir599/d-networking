# 🌐 d-networking

A full-stack social networking platform built with **React**, **Node.js**, **Express**, **Prisma**, and **PostgreSQL**.

> 🚧 This project is currently under active development.

---

## Features

### Authentication

- [x] User registration
- [ ] Secure login with JWT
- [x] Password hashing using bcrypt
- [ ] Protected API routes
- [ ] User profile management

### User Profiles

- [ ]View user profiles
- [ ]Update profile information
- [ ]Profile image support
- [X]User bio
- [X]User roles

### Posts

- [X]Create posts
- [X]Edit posts
- [X]Delete posts
- [X]View all posts
- [X]View individual posts

### Comments

- [x] Comment on posts
- [x] Edit comments
- [x] Delete comments
- [x] Comment count

### Likes

- [x] Like and unlike posts
- [x] Like and unlike comments
- [x] Prevent duplicate likes
- [x] Like count

### Social Features

- [ ] Follow users
- [ ] Followers & following
- [ ] Friend requests
- [ ] Friend request status

### Messaging

- [ ] Send direct messages
- [ ] Receive messages
- [ ] Read status

### Notifications

- [ ] Like notifications
- [ ] Comment notifications
- [ ] Follow notifications
- [ ] Message notifications
- [ ] Read/unread status

---

## Tech Stack

### Frontend

- React
- Tailwind CSS
- FontAwesome

### Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication (yet to be implemented)
- bcrypt
- Zod Validation
- Multer (yet to be implemented)

### Development Tools

- JavaScript
- Nodemon
- Podman
- Postman
- Git & GitHub

---

## Project Structure

```text
d-networking/
├── backend/
│   ├── prisma/
│   └── src/
│       ├── db/
│       ├── handlers/
│       ├── middlewares/
│       ├── routes/
│       ├── service/
│       ├── uploads/
│       ├── utils/
│       ├── validators/
│       ├── server.js
│       └── package.json
├── frontend/
│   ├── src/
│   │    ├── assets/
│   │    ├── components/
│   │    ├── middlewares/
│   │    ├── App.css/
│   │    ├── App.jsx/
│   │    ├── index.css/
│   │    ├── main.jsx/
│   └── package.json
│
└── README.md

```

---

## Database Design

The application uses a relational PostgreSQL database managed through Prisma.

Main entities include:

- User
- Post
- Comment
- PostLike
- CommentLike
- Follow
- Message
- Notification

Relationships are handled using Prisma relations with cascading deletes where appropriate.

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/dir599/d-networking.git
cd d-networking
```

### For backend

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file.

```env
PORT=
POSTGRES_USER=
POSTGRES_DB=d-
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_PORT=pport

DATABASE_URL="postgresql://username:password@localhost:pport/d-networking?schema=public"
```

use `PORT` for server.js and `POSTGRES_PORT` for the postgres

### Start PostgreSQL

Using Podman:

```bash
podman compose up -d
```

### Apply Prisma migrations

```bash
npx prisma migrate dev
```

Generate the Prisma client:

```bash
npx prisma generate
```

### Run the development server

```bash
npm run dev
```

---

### For frontend

```bash
cd frontend
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

---

## API

### Users

| Method | Endpoint     |
| ------ | ------------ |
| GET    | `/users`     |
| GET    | `/users/:id` |
| POST   | `/users`     |
| PUT    | `/users/:id` |
| DELETE | `/users/:id` |

### Posts

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | `/posts`          |
| GET    | `/posts/:id`      |
| POST   | `/posts`          |
| POST   | `/posts/:id/like` |
| PUT    | `/posts/:id`      |
| DELETE | `/posts/:id`      |

### Comments

| Method | Endpoint             |
| ------ | -------------------- |
| GET    | `/comments`          |
| GET    | `/comments/:id`      |
| POST   | `/comments`          |
| POST   | `/comments/:id/like` |
| PUT    | `/comments/:id`      |
| DELETE | `/comments/:id`      |

---

## Future Improvements

- Image uploads for posts
- Infinite scrolling
- Real-time messaging using WebSockets
- Typing indicators
- Search functionality
- User recommendations
- Saved posts
- Bookmarks
- Pagination
- Email verification
- Password reset
- Two-factor authentication
- Admin dashboard
- Unit and integration tests
- CI/CD pipeline

---

## Learning Goals

This project is intended to strengthen knowledge in:

- REST API development
- Authentication & Authorization
- Database design
- Prisma ORM
- Express middleware
- File uploads
- Backend architecture
- API validation
- Error handling
- Relational database modeling

---

## License

This project is licensed under the MIT License.

---

## Contributors
- Sanjog Rai
- Dirag Kasula