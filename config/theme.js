import { lighten } from 'polished'

const colors = {
  primary: '#3D63AE',
  bg: '#fff',
  black: '#000',
  greyLight: '#EBEDF2',
  greyBlue: '#a2bce2',
  grey: '#595C62',
  greyDark: '#303643',
  greyDarker: '#1c252b',
}

const transitions = {
  normal: '0.5s',
}

const fontSize = {
  small: '0.9rem',
}

const fontFamily = {
  serif: `'Lora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
}

const breakpoints = {
  phone: '600px',
  tablet: '1200px',
}

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '18px',
}

export default theme
