import general from './general'

const app = () => {
  // General Code for all pages
  general()

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
