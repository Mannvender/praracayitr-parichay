import { useEffect } from "react"

const useEffectOnce = (effect: () => void) => {
  useEffect(effect, [])
}

export default useEffectOnce
