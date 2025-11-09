# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite application intended to be hosted on GitHub Pages. The site is for phloem-analytics.github.io.

## Development Commands

### Development Server
```bash
npm run dev
```
Starts the Vite development server with HMR (Hot Module Replacement).

### Building
```bash
npm run build
```
Builds the application for production into the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build.

### Linting
```bash
npm run lint
```
Run ESLint to check code quality.

### Deployment
```bash
npm run deploy
```
Deploys the application to GitHub Pages. This runs `predeploy` (build) automatically before deploying the `dist` directory using gh-pages.

## Architecture

### Tech Stack
- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool and dev server
- **ESLint** - Code linting with React Hooks and React Refresh plugins

### Project Structure
- **Entry Point**: `src/main.jsx` - Creates the React root and renders the App component
- **Main Component**: `src/App.jsx` - Root application component
- **Styling**: Component-level CSS (`App.css`) and global styles (`index.css`)
- **Assets**: Stored in `src/assets/`
- **Build Output**: `dist/` directory (ignored by git and ESLint)

### Vite Configuration
The `vite.config.js` uses `base: '/'` for the deployment path. This may need adjustment depending on the GitHub Pages repository configuration (user/org site vs project site).

### ESLint Configuration
Uses flat config format (`eslint.config.js`) with:
- JavaScript recommended rules
- React Hooks recommended rules
- React Refresh for Vite
- Custom rule: Allows unused variables with uppercase names (pattern: `^[A-Z_]`)

## GitHub Pages Deployment

The project uses `gh-pages` package for deployment. The build artifacts from `dist/` are deployed to the gh-pages branch when running `npm run deploy`.
