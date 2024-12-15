# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### ⚠️ Important Notes
- Original source files still remain in `/src` directory
- Migration to new structure is in progress
- Both old and new structures currently coexist
- Full migration and cleanup pending
- Service Ports:
  - Frontend: http://localhost:3000 (Next.js)
  - Backend: http://localhost:3001 (Express)

### Migration Status
- [x] Created new monorepo structure
- [x] Set up backend service
- [x] Created shared packages
- [ ] Move source files from `/src` to `/apps/frontend/src`
- [ ] Update import paths in frontend code
- [ ] Remove old directory structure
- [ ] Update build and deployment configs

### Next Steps
1. **Frontend Migration**
   - Copy existing components to `/apps/frontend/src`
   - Update import paths to use new package structure
   - Update API calls to use new backend endpoints
   - Test all frontend functionality

2. **Backend Setup**
   - Complete LLM service implementation
   - Add authentication middleware
   - Set up proper error handling
   - Add request validation
   - Implement proper logging

3. **Configuration**
   - Move environment variables to appropriate services
   - Update deployment scripts
   - Set up development proxy configuration
   - Configure CORS settings

4. **Testing & Validation**
   - Test frontend-backend communication
   - Validate LLM functionality
   - Check authentication flow
   - Performance testing

5. **Cleanup**
   - Remove original `/src` directory
   - Update documentation
   - Remove unused dependencies
   - Clean up old configuration files

### Changed
- Initiated project restructure into a monorepo using pnpm workspaces
  - Created parallel structure with `apps/frontend` and `apps/backend`
  - Created shared packages for types and configuration
  - Migrated from npm to pnpm for better workspace management

### Added
- New Express.js backend service in `apps/backend/`
  - Dedicated LLM service layer
  - REST API endpoints for model interactions
  - Centralized model configuration
- Shared TypeScript types package in `packages/types/`
  - Common interfaces for LLM requests/responses
  - Shared model configuration types
- Shared configuration package in `packages/config/`
  - Centralized model definitions
  - Common configuration values
- Frontend API client for LLM interactions
  - Type-safe API calls
  - Consistent error handling
- Turborepo configuration for optimized builds
- Comprehensive development scripts in root package.json

### Architectural Changes
- Separated LLM functionality from frontend
- Centralized model management in backend service
- Improved type safety across frontend and backend
- Standardized API response formats
- Better separation of concerns between UI and business logic

### Developer Experience
- Added workspace-aware development setup
- Improved build and development scripts
- Centralized dependency management
- Better code organization and modularity

### Dependencies
- Upgraded to pnpm for workspace management
- Added Turborepo for monorepo orchestration
- Configured shared TypeScript settings
- Standardized ESLint and Prettier across packages
