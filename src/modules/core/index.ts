import { lazy } from 'react'

export { default as coreConstants } from './constants/core'
export * from './service/marvel-service'
export * from './components/nav-link'
export * from './hooks/use-debounce'
export * from './service/service'
export * from './components/ui'

export const SearchBar = lazy(() => import('./components/search-bar'))
export const Pagination = lazy(() => import('./components/pagination'))
