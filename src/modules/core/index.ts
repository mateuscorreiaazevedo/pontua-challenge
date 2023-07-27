import { lazy } from 'react'

export { default as coreConstants } from './constants/core'
export * from './components/nav-link'
export * from './hooks/use-debounce'
export * from './service/service'

export const SearchBar = lazy(() => import('./components/search-bar'))
