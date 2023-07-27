import React from 'react'

export function useDebounce<T>(value: T, delayInMs = 500): { debouncedValue: T } {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value)

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delayInMs)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delayInMs])

  return { debouncedValue }
}
