// General Code for all pages
import asyncFonts from './tools/async-fonts'
import faqs from './faqs'

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

faqs()
