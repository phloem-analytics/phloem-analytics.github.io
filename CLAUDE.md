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
```
src/
├── components/         # React components
│   ├── App.jsx        # Root component with state-based routing
│   ├── Sidebar.jsx    # Navigation sidebar with theme toggle
│   ├── Home.jsx       # Home page component
│   ├── About.jsx      # About page component
│   ├── Reports.jsx    # Reports list/detail view component
│   └── Contact.jsx    # Contact page component
├── data/
│   └── reports/       # Individual report JSX files (auto-loaded at build time)
├── styles/            # Component-specific CSS files
│   ├── Sidebar.css    # Sidebar and navigation styles
│   └── Reports.css    # Report list and detail view styles
├── assets/            # Static assets (logos, images)
├── App.css            # Main application and layout styles
├── index.css          # Global styles and CSS reset
└── main.jsx           # Application entry point
```

- **Entry Point**: `src/main.jsx` - Creates the React root and renders the App component
- **Main Component**: `src/App.jsx` - Root application component with state-based routing (no router library)
- **Navigation**: State-based routing using `activeSection` state variable
- **Styling**: Component-level CSS in `src/styles/` + `App.css` and global `index.css`
- **Assets**: Stored in `src/assets/`
- **Data**: Reports stored as individual JSX files in `src/data/reports/`
- **Build Output**: `dist/` directory (ignored by git and ESLint)

### Vite Configuration
The `vite.config.js` uses `base: '/'` for the deployment path. This may need adjustment depending on the GitHub Pages repository configuration (user/org site vs project site).

### ESLint Configuration
Uses flat config format (`eslint.config.js`) with:
- JavaScript recommended rules
- React Hooks recommended rules
- React Refresh for Vite
- Custom rule: Allows unused variables with uppercase names (pattern: `^[A-Z_]`)

## Reports System Architecture

### Overview
The Reports feature uses a modular architecture where each report is a separate JSX file, automatically loaded at build time using Vite's `import.meta.glob()` feature.

### How It Works

1. **Individual Report Files**: Each report is stored in `/src/data/reports/` as a `.jsx` file
2. **Auto-Loading**: `Reports.jsx` uses `import.meta.glob('../data/reports/*.jsx', { eager: true })` to import all reports at build time
3. **No Runtime Overhead**: All reports are bundled during build, not loaded dynamically at runtime
4. **Automatic Discovery**: New reports are automatically discovered - just add a new file to the directory

### Report File Structure
Each report file exports a default object:
```javascript
export default {
  id: 'unique-id',                    // Unique identifier
  title: 'Report Title',              // Display title
  shortDescription: 'Brief summary',  // For list view
  date: 'YYYY-MM-DD',                // Publication date (for sorting)
  image: '/path/to/image.png',       // Thumbnail/hero image
  pdfPath: '/path/to/pdf',           // Mock PDF download path
  content: () => (<>JSX content</>)  // React component for full content
}
```

### Adding New Reports
To add a new report:
1. Create a new `.jsx` file in `/src/data/reports/`
2. Follow the structure above
3. The `content` field can include any React components (charts, graphs, interactive elements)
4. No changes needed to `Reports.jsx` - it auto-discovers new files

### Future Capabilities
The JSX-based content system supports:
- Interactive charts and visualizations (import charting libraries)
- Custom React components
- Dynamic data fetching
- Embedded demos or code examples
- Any valid React/JSX content

### Layout Notes
- Reports list uses CSS Grid (responsive, auto-fill columns)
- Detail view rendered conditionally based on `selectedReport` state
- Content area centered with scrollbar at far right edge
- Padding-based centering: `padding-right: calc(250px + 2rem)` balances the left sidebar

## GitHub Pages Deployment

The project uses `gh-pages` package for deployment. The build artifacts from `dist/` are deployed to the gh-pages branch when running `npm run deploy`.
