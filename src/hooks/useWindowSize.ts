import useRafState from "hooks/useRafState"
import useEffectOnce from "hooks/useEffectOnce"

// React sensor hook that tracks dimensions of the browser window.
const useWindowSize = () => {
  const [state, setState] = useRafState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffectOnce(() => {
    const handler = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  })

  return state
}

export default useWindowSize
