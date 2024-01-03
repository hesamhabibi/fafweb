export const detect_side_rendering = () => typeof window === 'undefined' ? 'ssr' : 'csr'

export const has_ssr = () => detect_side_rendering() === "ssr"