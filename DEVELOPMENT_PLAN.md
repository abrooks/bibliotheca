# Bibliotheca SPA Development Plan (Clojure/ClojureScript)

## Project Overview
Build a single-page web application using ClojureScript for filtering, sorting, and displaying media resources with comprehensive search and filter capabilities, deployable to GitHub Pages with consistent local/CI build processes.

## Phase 1: Foundation & Schema
1. **Project Setup**
   - Configure ClojureScript build with Shadow-CLJS
   - Set up unified build system that works locally and in CI
   - Create package.json scripts for local development
   - Configure GitHub Actions for automated build/deploy
   - Update deps.edn with required dependencies

2. **Data Schema & Validation**
   - Add `tags` field to YAML schema (vector of strings)
   - Generate Malli schema for media items validation
   - Create spec for all fields (title, author, year, stars, summary, whyRecommended, recommendedToWhom, mediaType, prerequisites, length, url, tags)
   - Build YAML parsing and validation pipeline
   - Update out2.yaml to include tags field

3. **Build & Deploy Pipeline**
   - Shadow-CLJS configuration for dev/prod builds
   - Local development server with hot reload
   - Production build optimization
   - GitHub Actions workflow that mirrors local build process
   - GitHub Pages deployment configuration

## Phase 2: Core Dependencies & Build System
4. **Dependencies Setup**
   - Shadow-CLJS for build system
   - Reagent for React wrapper
   - Re-frame for state management
   - Reitit for routing and URL state
   - Malli for schema validation
   - cljs-yaml for YAML parsing
   - Node.js tooling for local development consistency

5. **Local Development Workflow**
   - `npm run dev` - Start development server
   - `npm run build` - Production build
   - `npm run serve` - Serve built files locally
   - `npm run clean` - Clean build artifacts
   - Shadow-CLJS watch mode for hot reloading

6. **CI/CD Pipeline**
   - GitHub Actions workflow using same npm scripts
   - Caching for faster builds (node_modules, .shadow-cljs)
   - Build artifact generation
   - Automated deployment to GitHub Pages
   - Build status checks and notifications

## Phase 3: Core UI & State Management
7. **State Architecture**
   - Design re-frame event/subscription structure
   - App state for media data, filters, sort options, view settings
   - URL hash-based state management (#filter=books&author=kim&sort=year)
   - Browser history integration

8. **Basic UI Components**
   - Main layout component (header, filters, content)
   - Media table component with responsive design
   - Text wrapping for long content (summaries, descriptions)
   - Clickable title links using url field
   - Basic CSS styling (can enhance later)

9. **Data Loading & Processing**
   - Fetch and parse out2.yaml at startup
   - Validate data against Malli schema
   - Transform data for efficient filtering/sorting
   - Error handling for malformed data

## Phase 4: Filtering & Sorting System
10. **Filter Controls**
    - Text search input (searches title, author, summary)
    - Media type dropdown/multi-select
    - Author multi-select with autocomplete
    - Year range slider
    - Star rating filter
    - Length/duration filter
    - Tags multi-select with autocomplete
    - Prerequisites filter
    - "Recommended to whom" filter

11. **Table Functionality**
    - Column sorting (title, author, year, stars, length)
    - Multiple sort criteria support
    - Sortable and filterable columns
    - Responsive table design for mobile
    - Row highlighting and selection

12. **URL State Management**
    - Encode all filter states in URL hash
    - Decode URL on page load to restore state
    - Update URL on filter/sort changes
    - Shareable URLs that reproduce exact views
    - Browser back/forward navigation

## Phase 5: Enhanced Features & Deployment
13. **View Options & Advanced Features**
    - Table view (default) and card view
    - Compact list view with view mode persistence
    - Clear all filters and filter summary display
    - Export filtered results and keyboard shortcuts
    - Virtual scrolling for performance

14. **Production Deployment**
    - GitHub Pages configuration with proper SPA routing
    - Build optimization and bundle analysis
    - SEO metadata and accessibility improvements
    - Cross-browser testing and mobile responsiveness

## Technical Stack
- **Build System**: Shadow-CLJS + Node.js tooling
- **Frontend**: ClojureScript + Reagent + Re-frame
- **Routing**: Reitit (hash-based routing)
- **State Management**: Re-frame
- **Schema**: Malli
- **Data**: cljs-yaml for YAML parsing
- **Styling**: CSS (vanilla, framework-agnostic)
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## Build Configuration Files
- `shadow-cljs.edn` - ClojureScript build config
- `package.json` - Node.js scripts and dependencies
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `deps.edn` - Clojure dependencies
- `public/index.html` - Main HTML template

## Local Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Production build
npm run serve        # Serve built files locally
npm run clean        # Clean build artifacts
```

## CI/CD Workflow
1. **Trigger**: Push to main branch or PR
2. **Setup**: Install Node.js, Clojure, and dependencies
3. **Build**: Run `npm run build` (same as local)
4. **Test**: Validate build artifacts
5. **Deploy**: Deploy to GitHub Pages (main branch only)
6. **Cache**: Cache dependencies for faster subsequent builds

## Project Structure
```
src/
  bibliotheca/
    core.cljs           ; Main app entry
    events.cljs         ; Re-frame events
    subs.cljs          ; Re-frame subscriptions
    views.cljs         ; Main UI components
    components/        ; Reusable components
      table.cljs        ; Data table component
      filters.cljs      ; Filter controls
    schema.cljs        ; Malli schemas
    utils.cljs         ; Utility functions
    router.cljs        ; URL routing logic
public/
  index.html           ; Main HTML file
  out2.yaml           ; Data file
  css/
    styles.css         ; Main stylesheet
resources/
  public/             ; Static assets
```

## Schema Structure (Malli)
```clojure
(def MediaItem
  [:map
   [:title :string]
   [:author :string]
   [:year :string]
   [:stars [:or :string :int]]
   [:summary :string]
   [:whyRecommended :string]
   [:recommendedToWhom :string]
   [:mediaType :string]
   [:prerequisites :string]
   [:length :string]
   [:url :string]
   [:tags [:vector :string]]])

(def MediaLibrary
  [:vector MediaItem])
```

## URL Hash Format
The application uses hash-based routing to maintain state in URLs:

### Examples
- `#view=table&sort=year&order=desc`
- `#filter=author:kim&mediaType=book&tags=management,leadership`
- `#search=constraints&view=cards&sort=stars`

### Parameters
- `view`: Display mode (table, cards, list)
- `sort`: Sort field (title, author, year, stars, length)
- `order`: Sort direction (asc, desc)
- `search`: Free text search term
- `filter`: Field-specific filters
- `tags`: Tag filters (comma-separated)
- `mediaType`: Media type filter
- `author`: Author filter

## Data Processing Pipeline
1. **Load**: Fetch YAML data from public/out2.yaml
2. **Parse**: Convert YAML to ClojureScript data structures
3. **Validate**: Check against Malli schema
4. **Transform**: Normalize data for efficient filtering/sorting
5. **Index**: Create search indices for fast text search
6. **Store**: Save to re-frame app state

## Filter Implementation Strategy
- **Text Search**: Full-text search across title, author, summary fields
- **Faceted Filters**: Multi-select for categorical data (tags, media type, author)
- **Range Filters**: Sliders for numeric data (year, stars, length)
- **Combination Logic**: AND logic between filter types, OR within categories
- **Real-time Updates**: Immediate filter application with debounced URL updates

## Performance Considerations
- **Virtual Scrolling**: Handle large datasets efficiently
- **Memoization**: Cache expensive computations
- **Lazy Loading**: Load data progressively if needed
- **Bundle Splitting**: Optimize initial load time
- **Search Indexing**: Pre-compute search indices for fast filtering

## Future Enhancements
- **Progressive Web App**: Service worker for offline access
- **Advanced Search**: Boolean operators, field-specific search
- **Data Export**: CSV, JSON, and other format exports
- **Bulk Operations**: Multi-select actions
- **User Preferences**: Saved filters and view preferences
- **API Integration**: External data sources (Goodreads, etc.)
- **Collaborative Features**: Shared libraries and recommendations

## Development Phases Timeline
- **Phase 1**: 1-2 weeks (Foundation & Schema)
- **Phase 2**: 1-2 weeks (Dependencies & Build System)
- **Phase 3**: 2-3 weeks (Core UI & State Management)
- **Phase 4**: 2-3 weeks (Filtering & Sorting System)
- **Phase 5**: 1-2 weeks (Enhanced Features & Deployment)

Total estimated timeline: 7-12 weeks for MVP

## Technical Decisions & Rationale

### ClojureScript + Re-frame
- **Immutable Data**: Simplifies state management and debugging
- **Functional Programming**: Reduces bugs and improves maintainability
- **Re-frame**: Battle-tested state management with clear patterns
- **Hot Reloading**: Excellent development experience

### Hash-based Routing
- **GitHub Pages Compatible**: No server-side routing required
- **Shareable URLs**: Full application state in URL
- **SEO Friendly**: Crawlable content with proper meta tags
- **Browser Support**: Works across all modern browsers

### Malli Schema
- **Runtime Validation**: Catch data errors early
- **Documentation**: Self-documenting data structures
- **Transformations**: Built-in data coercion and transformation
- **Developer Experience**: Clear error messages and validation

### Single YAML File
- **Simplicity**: Easy to edit and version control
- **Performance**: Single HTTP request for all data
- **Git Friendly**: Clear diffs and merge conflict resolution
- **No Database**: Eliminates backend complexity