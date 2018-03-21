// General Code for all pages
import asyncFonts from './tools/async-fonts'

const app = () => {
  asyncFonts({
    href: 'https://fonts.googleapis.com/css?family=Lato:700,900|Source+Sans+Pro:400,400i,600,700,900',
    observer: 'Source Sans Pro'
  })

  asyncFonts({
    observer: 'Lato'
  })

  // Code split per page

  // Homepage
  if (document.querySelector('#hero')) {
  import(/* webpackChunkName: "home" */ './home').then(home => {
    home.default()
  })
  }

  // Homepage
  if (document.querySelector('#faqs-page')) {
  import(/* webpackChunkName: "faqs" */ './faqs').then(faqs => {
    faqs.default()
  })
  }
}

export default app
