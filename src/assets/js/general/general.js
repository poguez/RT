import asyncFonts from '../tools/async-fonts'
import gtm from './gtm'

const general = () => {
  asyncFonts({
    href: 'https://fonts.googleapis.com/css?family=Lato:700,900|Source+Sans+Pro:400,400i,600,700,900',
    observer: 'Source Sans Pro'
  })

  asyncFonts({
    observer: 'Lato'
  })

  gtm()
}

export default general
