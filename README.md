# :books: Description

<p align="justify">
 Responsive web application with the purpose of displaying projects and contacts.
</p>

# :bookmark_tabs: Tools

- Typescript;
- Next;
- Chakra UI;
- Node;
- Docker;
- Prisma;
- PostgreSQL;
- Jest;
- React Testing Library;
- Cypress

# Demo
### The project is alread deployed on vercel, you can see in this URL:
```
https://andrey-novaes.me/
```

# 💻 How to run

## :desktop_computer: Locally, on your own computer <br>

### Clone and enter the directory

```
 git clone https://github.com/AndreyNovaes/next-prisma-typescript.git
 cd next-prisma-typescript
 npm install
```

### Fill the .env variable DATABASE_URL, with your postgreSQL, use this command to create it, enter the .env file and fill it with your local PostgreSQL database information

```
 cp .env.example .env
```

### go to ./services/requests, use the development URL, http://localhost:3000/api
```
npm run build && npm start
```

### the app will be running in:
```
http://localhost:3000
```

