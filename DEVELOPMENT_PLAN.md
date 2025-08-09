# Bibliotheca SPA Development Plan (Clojure/ClojureScript)

## Project Overview
Build a single-page web application using ClojureScript for filtering, sorting, and displaying media resources with comprehensive search and filter capabilities, deployable to GitHub Pages with consistent local/CI build processes.

## Current Status ✅ COMPLETED
**First iteration is complete and running successfully!**
- Development server running on http://localhost:8081
- All core functionality implemented and working
- React 18 compatibility with createRoot API
- YAML data loading and parsing
- Comprehensive filtering and sorting
- Responsive design with table view
- Hot code reloading in development

## Reproduction Guide
To recreate this project from scratch, follow these exact steps:

### Prerequisites
- Node.js (v16+)
- Clojure CLI tools
- Git repository initialized

### Essential Files Created
1. **shadow-cljs.edn** - Build configuration
2. **package.json** - Node dependencies and scripts
3. **deps.edn** - Clojure dependencies
4. **public/index.html** - Main HTML template with js-yaml CDN
5. **public/css/styles.css** - Responsive styling
6. **public/out2.yaml** - Media data file (copy from root)
7. **src/bibliotheca/** - All ClojureScript source files

### Critical Implementation Notes
- Use React 18's `createRoot` API instead of deprecated `ReactDOM.render`
- Import `day8.re-frame.http-fx` to register HTTP effects
- Include js-yaml via CDN in HTML for YAML parsing
- Ensure `tags: []` field exists in all YAML entries
- Helper functions must be defined before use in events.cljs
- Use Clojure CLI directly if Java runtime issues: `clj -M -m shadow.cljs.devtools.cli watch app`

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
npm run dev          # Start development server (uses shadow-cljs)
npm run build        # Production build
npm run serve        # Serve built files locally
npm run clean        # Clean build artifacts

# Alternative if npm fails due to Java issues:
clj -M -m shadow.cljs.devtools.cli watch app    # Direct Clojure CLI usage
clj -M -m shadow.cljs.devtools.cli compile app  # One-time compilation
```

## Step-by-Step Setup Instructions

### 1. Initial Project Setup
```bash
mkdir bibliotheca && cd bibliotheca
git init
npm init -y
```

### 2. Install Dependencies
```bash
npm install shadow-cljs react react-dom
```

### 3. Create Configuration Files
Copy the exact configuration from these files:
- `shadow-cljs.edn` (with React dependencies and dev-http config)
- `deps.edn` (with all Clojure/ClojureScript dependencies)
- `package.json` (with proper npm scripts)

### 4. Create Directory Structure
```bash
mkdir -p src/bibliotheca/components public/css
```

### 5. Essential File Creation Order
1. Create `public/index.html` with js-yaml CDN link
2. Create `public/css/styles.css` with responsive design
3. Create `src/bibliotheca/schema.cljs` with Malli validation
4. Create `src/bibliotheca/events.cljs` with helper functions first
5. Create `src/bibliotheca/subs.cljs` with subscriptions
6. Create `src/bibliotheca/components/table.cljs` and `filters.cljs`
7. Create `src/bibliotheca/views.cljs` with main components
8. Create `src/bibliotheca/core.cljs` with React 18 createRoot

### 6. Data File Setup
```bash
# Add tags field to existing YAML data
cat out2.yaml | yq --yaml-output 'map(. + {"tags": []})' > out2_temp.yaml
mv out2_temp.yaml out2.yaml
cp out2.yaml public/out2.yaml
```

### 7. Start Development
```bash
npm run dev  # or use clj command if Java issues
# Visit http://localhost:8080 or 8081 if port is in use
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

## Troubleshooting Guide

### Common Issues Encountered During Development

#### 1. React 18 Deprecation Warnings
**Problem**: Console warnings about `ReactDOM.render` and `unmountComponentAtNode` being deprecated
**Solution**: 
- Use `reagent.dom.client` instead of `reagent.dom`
- Implement `createRoot` API pattern with atom to store root reference
- See `src/bibliotheca/core.cljs` for correct implementation

#### 2. Missing HTTP Effects Handler
**Problem**: `re-frame: no handler registered for effect: http-xhrio`
**Solution**: Import `day8.re-frame.http-fx` in core namespace (import for side effects)

#### 3. Java Runtime Issues
**Problem**: "Unable to locate a Java Runtime" when running `npm run dev`
**Solution**: Use Clojure CLI directly: `clj -M -m shadow.cljs.devtools.cli watch app`

#### 4. Function Order in events.cljs
**Problem**: ClojureScript compilation warnings about undeclared functions
**Solution**: Define helper functions before they're used in event handlers

#### 5. YAML Tags Field Missing
**Problem**: App expects `tags` field but it was missing from data after git operations
**Solution**: Use yq to add empty tags arrays: `cat out2.yaml | yq --yaml-output 'map(. + {"tags": []})' > temp.yaml`

#### 6. Port Conflicts
**Problem**: Development server shows port 8080 in use
**Solution**: Shadow-CLJS automatically tries port 8081, check console output for actual port

### Development Best Practices Learned
- Always preserve user content - never modify data files with actual content
- Use separate test files for development (e.g., `test-data.yaml`)
- Keep helper functions at top of files before use
- Import side-effect libraries in core namespace
- Use Clojure CLI as backup for npm script issues

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

## Key Configuration Files

### shadow-cljs.edn
```clojure
{:source-paths ["src"]
 :dependencies [[reagent "1.2.0"]
                [re-frame "1.3.0"]
                [reitit "0.7.0-alpha7"]
                [metosin/malli "0.13.0"]
                [day8.re-frame/http-fx "0.2.4"]
                [cljs-ajax "0.8.4"]
                [akiroz.re-frame/storage "0.1.4"]]

 :dev-http {8080 "public"}

 :builds
 {:app {:target :browser
        :output-dir "public/js"
        :asset-path "/js"
        :modules {:main {:init-fn bibliotheca.core/init}}
        :devtools {:http-root "public"
                   :http-port 8080}}}}
```

### package.json (key sections)
```json
{
  "scripts": {
    "dev": "npx shadow-cljs watch app",
    "build": "npx shadow-cljs release app",
    "serve": "npx shadow-cljs server",
    "clean": "npx shadow-cljs clean",
    "repl": "npx shadow-cljs cljs-repl app"
  },
  "devDependencies": {
    "shadow-cljs": "^2.25.10"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### Core React 18 Implementation Pattern
```clojure
(ns bibliotheca.core
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdom]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]  ; Import for side effects
            [bibliotheca.events :as events]
            [bibliotheca.subs :as subs]
            [bibliotheca.views :as views]))

(defonce root (atom nil))

(defn ^:dev/after-load mount-root
  "Mount the root component"
  []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdom/create-root root-el)))
    (.render @root (r/as-element [views/main-panel]))))

(defn init
  "Initialize the application"
  []
  (rf/dispatch-sync [:initialize-db])
  (rf/dispatch [:load-media-data])
  (mount-root))
```

This documentation should provide everything needed to reproduce the working application from scratch.