/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ProjectsLazyImport = createFileRoute('/projects')()
const ExperienceLazyImport = createFileRoute('/experience')()
const ContactLazyImport = createFileRoute('/contact')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ProjectsLazyRoute = ProjectsLazyImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/projects.lazy').then((d) => d.Route))

const ExperienceLazyRoute = ExperienceLazyImport.update({
  path: '/experience',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/experience.lazy').then((d) => d.Route))

const ContactLazyRoute = ContactLazyImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/experience': {
      preLoaderRoute: typeof ExperienceLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      preLoaderRoute: typeof ProjectsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  ContactLazyRoute,
  ExperienceLazyRoute,
  ProjectsLazyRoute,
])

/* prettier-ignore-end */