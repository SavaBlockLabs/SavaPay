# Contributing to SavaPay

Welcome! We're excited that you're interested in contributing to SavaPay. Please read this guide to understand how to get started, our development workflow, and our coding standards.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Be respectful, inclusive, and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 10 or later
- A PostgreSQL database (for running locally)

### Setup Instructions

1. Fork the repository
2. Clone your fork: `git clone https://github.com/[your-username]/SavaPay.git`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Copy `.env.example` to `.env` in each app/package directory
   - Update variables with your local configuration
5. Generate Prisma Client: `cd packages/database && npm run generate`

## Development Workflow

### Branch Naming Convention

We use Git Flow-style branching:

- `main`: Production-ready code
- `develop`: Latest development code
- `feature/[feature-name]`: New features
- `fix/[bug-name]`: Bug fixes
- `chore/[task-name]`: Non-functional changes (dependencies, config, etc.)
- `docs/[doc-name]`: Documentation changes

### Local Development

1. Create a new branch from `develop`:
   ```bash
   git checkout -b feature/your-feature develop
   ```
2. Make your changes
3. Run checks locally: `npm run type-check && npm run lint && npm run format:check`
4. Commit your changes (follow Conventional Commits!)

### Commit Guidelines

This project uses Conventional Commits:

```
<type>(<scope>): <subject>

<optional body>

<optional footer>
```

**Types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation update
- `style`: Code style change (formatting, etc.)
- `refactor`: Refactoring (no functional change)
- `perf`: Performance improvement
- `test`: Adding/updating tests
- `build`: Build system or dependencies change
- `ci`: CI/CD changes
- `chore`: Other changes
- `revert`: Revert previous commit

Example:

```
feat(backend): add user authentication

- Add login endpoint
- Add JWT middleware
- Update Prisma schema
```

## Pull Request Process

### PR Formatting

1. Ensure the PR title follows Conventional Commits
2. Fill out the PR template completely
3. Link to any related issues

### Review & Merging

1. PRs require at least one approval from a code owner
2. All CI checks must pass
3. Squash commits when merging for a clean git history

## Coding Standards

### TypeScript

- Use strict mode
- Prefer type safety over `any`
- Prefer interfaces for object definitions unless type merging is needed

### Code Style

- We use Prettier and ESLint - always run them before committing
- Use 2 spaces for indentation
- Use single quotes (except JSX)
- Add semicolons

### File Organization

- Keep files small and focused
- Co-locate related files (tests with implementations, etc.)

### Naming Conventions

- Use PascalCase for classes and component names
- Use camelCase for variables, functions, and methods
- Use UPPER_SNAKE_CASE for constants
- Use kebab-case for file names

## Testing Guidelines

- Write unit tests for all new functionality
- Write integration tests for complex workflows
- Run tests before committing: `npm test`

## Documentation

- Update documentation when changing functionality
- Write clear commit messages for documentation changes
- Include comments in code for non-obvious decisions

## Thank You!

We appreciate your contributions and feedback! If you have any questions, feel free to open an issue or reach out.
