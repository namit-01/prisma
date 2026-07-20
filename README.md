# 🚀 Prisma ORM Setup Guide

**Prisma + PostgreSQL + Express.js**

*A clean, step-by-step guide to integrating Prisma ORM into a Node.js backend.*

---

## ✨ What is Prisma?

Prisma is a modern ORM (Object-Relational Mapper) that makes working with databases simple, safe, and enjoyable. It gives you:

- ✅ **Type-safe** database queries
- ✅ **Automatic** client generation
- ✅ **Built-in** database migrations
- ✅ **Simple** schema management
- ✅ **Prisma Studio** for visual database browsing

---

## 🛠️ Installation & Setup

### 1️⃣ Initialize your Node.js project

```bash
npm init -y
```

### 2️⃣ Install dependencies

**Backend dependencies:**

```bash
npm install express dotenv @prisma/client
```

**Prisma CLI & dev tools:**

```bash
npm install -D prisma@6 nodemon
```

### 3️⃣ Initialize Prisma

```bash
npx prisma init
```

This creates the following files:

```
📦 Project
 ┣ 📂 prisma
 ┃ ┗ 📜 schema.prisma
 ┗ 📜 .env
```

---

## 🔐 Database Configuration

Open `.env` and add your database connection string:

```env
DATABASE_URL="your_postgresql_connection_string"
```

**Example:**

```env
DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
```

---

## 🏗️ Create Your Database Models

Define your models in `prisma/schema.prisma`:

```prisma
model User {
  id       Int     @id @default(autoincrement())
  name     String?
  email    String  @unique
  password String?
}
```

---

## ⚡ Generate the Prisma Client

```bash
npx prisma generate
```

---

## 🗄️ Run Database Migrations

**Create and apply a migration (recommended for tracked schema changes):**

```bash
npx prisma migrate dev --name init
```

**Or quickly sync your schema without creating a migration (great for prototyping):**

```bash
npx prisma db push
```

---

## 🔌 Set Up the Prisma Client

Create `db/db.config.js`:

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
```

---

## 📂 Recommended Project Structure

```
📦 Backend
│
├── 📂 prisma
│   └── schema.prisma
│
├── 📂 db
│   └── db.config.js
│
├── 📂 controllers
│
├── 📂 routes
│
├── 📜 index.js
├── 📜 .env
└── 📜 package.json
```

---

## 🚀 Run the Application

```bash
npm run dev
```

---

## 📚 Prisma Command Reference

| Command | Purpose |
|---|---|
| `npx prisma init` | Initialize Prisma in your project |
| `npx prisma generate` | Generate the Prisma Client |
| `npx prisma migrate dev --name init` | Create and apply a new migration |
| `npx prisma db push` | Sync schema with the database (no migration) |
| `npx prisma studio` | Open Prisma Studio (visual DB editor) |
| `npx prisma db pull` | Pull the existing database schema |
| `npx prisma validate` | Validate your schema file |
| `npx prisma format` | Auto-format your schema file |

---

## 🔄 Workflow Overview

```
Install Dependencies
        ↓
Initialize Prisma
        ↓
Configure Database
        ↓
Create Models
        ↓
Generate Client
        ↓
Run Migration
        ↓
Build APIs
        ↓
Start Server
```

---


### 🎉 Setup Complete — Happy Building!
