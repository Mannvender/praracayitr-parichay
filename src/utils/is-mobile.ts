const isMobile = () => {
  const userAgent = navigator.userAgent
  const checkMobile = Boolean(
    userAgent.match(/Android | iPhone | Opera Mini | IEMobile | iPad /i)
  )
  return checkMobile
}
export default isMobile
