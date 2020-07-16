import { useRef, useState, useCallback } from "react"

import useUnmount from "hooks/useUnmount"

// React state hook that only updates state in the callback of requestAnimationFrame
const useRafState = (initialState: any) => {
  const frame = useRef(0)
  const [state, setState] = useState(initialState)

  const setRafState = useCallback((value) => {
    cancelAnimationFrame(frame.current)

    frame.current = requestAnimationFrame(() => {
      setState(value)
    })
  }, [])

  useUnmount(() => {
    cancelAnimationFrame(frame.current)
  })

  return [state, setRafState]
}

export default useRafState
