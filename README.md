# Bibliotheca

A single-page web application for filtering, sorting, and displaying media resources (books, audiobooks, videos, podcasts) with comprehensive search and filter capabilities.

## Overview

Bibliotheca is built with ClojureScript and provides an interactive interface for exploring a curated collection of media resources. Features include:

- **Advanced Filtering**: Filter by media type, author, tags, year, rating, and more
- **Full-text Search**: Search across titles, authors, and summaries
- **Multiple Views**: Table, card, and list display modes
- **URL State**: Shareable URLs that preserve filters and view settings
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Clojure CLI](https://clojure.org/guides/getting_started) tools
- Modern web browser

### Local Development

1. **Clone and Install**
   ```bash
   git clone https://github.com/yourusername/bibliotheca.git
   cd bibliotheca
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Opens development server at `http://localhost:8080` with hot reloading.

3. **Build for Production**
   ```bash
   npm run build
   ```
   Creates optimized build in `public/` directory.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Create production build |
| `npm run serve` | Serve built files locally for testing |
| `npm run clean` | Clean build artifacts and caches |
| `npm run lint` | Run code linting and formatting checks |

## Development Cycle

### Daily Development Workflow

1. **Start Development**
   ```bash
   npm run dev
   ```
   - Launches Shadow-CLJS watch mode
   - Starts local development server
   - Enables hot code reloading
   - Opens browser to `http://localhost:8080`

2. **Make Changes**
   - Edit ClojureScript files in `src/bibliotheca/`
   - Changes automatically reload in browser
   - Check browser console for compilation errors
   - Use browser dev tools for debugging

3. **Test Changes**
   - Verify functionality in development server
   - Test responsive design on different screen sizes
   - Validate URL state management (shareable links)
   - Check data loading and error handling

4. **Build and Validate**
   ```bash
   npm run build
   npm run serve
   ```
   - Test production build locally
   - Verify optimizations and bundle size
   - Ensure all features work in production mode

### Data Updates

1. **Update Media Data**
   - Edit `out2.yaml` with new entries or changes
   - Ensure data follows the established schema
   - Validate YAML syntax

2. **Schema Changes**
   - Update Malli schema in `src/bibliotheca/schema.cljs`
   - Test data validation with new schema
   - Update UI components if needed

3. **Test Data Changes**
   - Reload development server
   - Verify new data appears correctly
   - Test filtering and search with new content

### Deployment Process

1. **Automatic Deployment** (Recommended)
   - Push changes to `main` branch
   - GitHub Actions automatically builds and deploys
   - Site updates at GitHub Pages URL

2. **Manual Deployment**
   ```bash
   npm run build
   # Commit and push public/ directory changes
   ```

### Debugging and Troubleshooting

1. **Development Issues**
   - Check browser console for ClojureScript compilation errors
   - Use Shadow-CLJS build report for detailed error messages
   - Restart development server if hot reloading stops working

2. **Build Issues**
   - Clear build cache: `npm run clean`
   - Check Node.js and Clojure CLI versions
   - Verify all dependencies are installed

3. **Data Issues**
   - Validate YAML syntax using online YAML validator
   - Check browser network tab for data loading errors
   - Verify schema validation in browser console

## Project Structure

```
src/bibliotheca/           # ClojureScript source code
  core.cljs               # Main application entry point
  events.cljs             # Re-frame event handlers
  subs.cljs              # Re-frame subscriptions
  views.cljs             # Main UI components
  components/            # Reusable UI components
  schema.cljs            # Malli data schemas
  utils.cljs             # Utility functions
  router.cljs            # URL routing logic

public/                    # Static assets and build output
  index.html              # Main HTML template
  out2.yaml              # Media data file
  css/                   # Stylesheets

resources/                 # Build resources
shadow-cljs.edn           # ClojureScript build configuration
deps.edn                  # Clojure dependencies
package.json              # Node.js dependencies and scripts
```

## Data Schema

Media items follow this structure:
```yaml
- title: "Book Title"
  author: "Author Name"
  year: "2023"
  stars: "5"
  summary: "Book description..."
  whyRecommended: "Why this is valuable..."
  recommendedToWhom: "Target audience..."
  mediaType: "book"
  prerequisites: "Required background..."
  length: "300 pages"
  url: "https://example.com"
  tags: ["tag1", "tag2"]
```

## URL State Management

The application uses hash-based URLs to maintain state:

- `#view=table&sort=year&order=desc` - Table view sorted by year
- `#search=constraints&tags=management` - Search with tag filter
- `#filter=author:kim&mediaType=book` - Author and media type filters

All filter states, view modes, and sort options are preserved in URLs for easy sharing.

## Contributing

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/new-feature`
3. **Make Changes**: Follow the development workflow above
4. **Test Thoroughly**: Ensure all functionality works
5. **Submit Pull Request**: Include description of changes

### Code Style

- Follow standard ClojureScript formatting
- Use meaningful variable and function names
- Add docstrings to public functions
- Keep components small and focused

## Documentation

- **[Development Plan](DEVELOPMENT_PLAN.md)**: Detailed technical architecture and implementation phases
- **[Notes](NOTES.md)**: Original project requirements and design notes
- **[TODO](TODO.md)**: Outstanding tasks and future enhancements

## Deployment

The application is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch. The live site is available at:

`https://yourusername.github.io/bibliotheca/`

## License

MIT License - see LICENSE file for details.
