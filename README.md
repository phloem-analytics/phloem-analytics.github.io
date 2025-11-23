# Phloem Analytics Website

## Development

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts the Vite development server with HMR at http://localhost:5173

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
Deploys the application to GitHub Pages. Automatically builds before deploying.

## Project Structure

```
src/
├── components/         # React components
│   ├── App.jsx        # Main app component with routing
│   ├── Sidebar.jsx    # Navigation sidebar
│   ├── Home.jsx       # Home page
│   ├── About.jsx      # About page
│   ├── Reports.jsx    # Reports list/detail view
│   └── Contact.jsx    # Contact page
├── data/
│   └── reports/       # Individual report files (auto-loaded)
├── styles/            # Component-specific CSS
│   ├── Sidebar.css
│   └── Reports.css
├── assets/            # Static assets (images, logos)
├── App.css            # Main app styles
├── index.css          # Global styles
└── main.jsx           # App entry point
```

## Adding New Reports

Reports are automatically loaded from `/src/data/reports/`. To add a new report:

1. Create a new `.jsx` file in `/src/data/reports/`
2. Export a default object with this structure:

```javascript
export default {
  id: 'unique-report-id',
  title: 'Report Title',
  shortDescription: 'Brief description for the list view',
  date: 'YYYY-MM-DD',
  image: '/images/reports/thumbnail.png',
  pdfPath: '/reports/report-name.pdf',

  content: () => (
    <>
      <p>Your report content here...</p>
      <h3>Sections</h3>
      {/* You can include React components, charts, etc. */}
    </>
  )
}
```

3. The report will automatically appear in the Reports section (sorted by date)

## Tech Stack

- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool and dev server
- **ESLint** - Code linting
- **gh-pages** - GitHub Pages deployment

