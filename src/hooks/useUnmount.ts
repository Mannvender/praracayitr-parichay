import { useRef } from "react"
import useEffectOnce from "hooks/useEffectOnce"

const useUnmount = (fn: () => void) => {
  const fnRef = useRef(fn)

  // update the ref each render so if it change the newest callback will be invoked
  fnRef.current = fn

  useEffectOnce(() => () => fnRef.current())
}

export default useUnmount
