# Developer Guide

Welcome to the JioSaavn API developer guide! This document provides all the information you need to set up your local environment, follow our coding standards, and contribute effectively to the project.

---

## 🛠 Prerequisites

Before you start, ensure you have the following installed on your machine:
- **Bun (v1.0.29+)**: Our primary runtime and package manager. [Install Bun](https://bun.sh/docs/installation).
- **Node.js (v20+)**: Optional, but useful for some compatibility tasks.
- **Git**: For version control.

---

## 🚀 Local Environment Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sumitkolhe/jiosaavn-api.git
   cd jiosaavn-api
   ```

2. **Install Dependencies**:
   ```bash
   bun install
   ```

3. **Start Development Server**:
   ```bash
   bun run dev
   ```
   The server will be available at `http://localhost:3000`. It includes hot-reloading, so any changes you make to the source code will be reflected immediately.

---

## 🎨 Coding Standards

We strive for clean, readable, and maintainable code. Please adhere to the following standards:

### 1. TypeScript
- Use TypeScript for all new code.
- Avoid using `any` whenever possible. Define interfaces or types for your data.
- Leverage Zod for runtime validation and type inference.

### 2. Linting & Formatting
We use **ESLint** and **Prettier** to maintain code quality and consistency.
- **Run Linting**: `bun run lint`
- **Fix Linting Issues**: `bun run lint:fix`
- **Format Code**: `bun run format`

### 3. Spell Checking
We use **CSpell** to prevent typos in the codebase.
- **Run Spell Check**: `bun run spell-check`

---

## 🌿 Git Workflow

### 1. Branching
- Create a new branch for every feature or bug fix: `git checkout -b feature/my-new-feature`.
- Keep your branches up to date with the `main` branch.

### 2. Commit Messages
We follow the **Conventional Commits** specification. This helps in generating changelogs and managing releases.
- **Format**: `<type>(<scope>): <description>`
- **Example**: `feat(songs): add search by lyrics functionality`
- **Common Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

### 3. Git Hooks
We use **simple-git-hooks** to automate checks.
- Before every commit, `lint` and `format` will run automatically.
- Your commit message will be validated against the conventional commit standard.

---

## 🧪 Testing

Testing is a crucial part of our development process. We use **Vitest**.

- **Run All Tests**: `bun run test`
- **Watch Mode**: `bun x vitest`
- **UI Mode**: `bun run test:ui` (opens a beautiful web interface for your tests)

Always add tests for new features or bug fixes in a `.spec.ts` file alongside your code.

---

## 🏗 Building & Deployment

### 1. Production Build
To create a production-ready build:
```bash
bun run build
```
The output will be in the `dist` directory.

### 2. Docker
You can run the API using Docker:
```bash
docker-compose up
```

### 3. Deployment Platforms
- **Cloudflare Workers**: `bun run deploy`
- **Vercel**: Push to your repository and connect it to Vercel. Configuration is handled in `vercel.json`.

---

## 📂 Understanding the Codebase

For a deep dive into the architecture, design patterns, and internal logic, please refer to the [Architecture Guide](ARCHITECTURE.md).

Quick summary of `src/`:
- `common/`: Shared logic, constants, and global types.
- `modules/`: Feature-based modules (songs, albums, etc.). Each module has its own controllers, services, and use cases.
- `pages/`: Server-side rendered pages using Hono's `html` middleware.

---

## ✅ Contribution Checklist

Before submitting a Pull Request, please ensure:
1. [ ] Your code passes all linting and formatting checks.
2. [ ] All tests pass (`bun run test`).
3. [ ] You have added tests for your changes.
4. [ ] Your commit messages follow the conventional commit format.
5. [ ] You have updated the documentation if necessary.

---

Thank you for helping make JioSaavn API better! Happy coding! 🚀
