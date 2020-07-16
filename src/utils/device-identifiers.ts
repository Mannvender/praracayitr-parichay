export const isMobileDevice = (width: number) =>
	width < 768

export const isMediumDevice = (width: number) =>
	width >= 768 && width < 992