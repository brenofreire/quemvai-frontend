import { useEffect, useRef } from 'react'

export const useSkipFirstRender = () => {
  const render = useRef(true)

  useEffect(() => {
    render.current = false
  }, [])

  return render.current
}

export const skipFirstRender = (isFirstRender: boolean, fn: () => void) => {
  if (!isFirstRender) fn()
}
