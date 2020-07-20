export const getParams = (object: object) => {
	const params = Object.entries(object)
	  .filter(([, value]) => value !== undefined && value !== null)
	  .map(
		([key, value]) =>
		  `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
	  )
	return params.length > 0 ? `?${params.join('&')}` : ''
  }

  export const getFacebookLink = (config: object) => {
	return `https://www.facebook.com/sharer/sharer.php${getParams(config)}`
  }

  export const getTwitterLink = (config: object) => {
	return `https://twitter.com/share${getParams(config)}`
  }

  export const getWhatsAppLink = (config: object) => {
	const isMobileOrTablet = /(android|iphone|ipad|mobile)/i.test(
	  navigator.userAgent
	)
	return `https://${
	  isMobileOrTablet ? 'api' : 'web'
	}.whatsapp.com/send${getParams(config)}`
  }

  export const getEmailLink = (config: object) => {
	return `mailto:${getParams(config)}`
  }

  export const handleClick = (url: string) => {
	window.open(url)
  }
