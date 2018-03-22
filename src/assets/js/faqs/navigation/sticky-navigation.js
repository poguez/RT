import { wrapper } from './wrapper'
import { faqs } from 'styles'

const stickyNavigation = () => {
  window.addEventListener('scroll', event => {
    const { navigation, header, menu } = faqs
    const headerClass = header.wrapper

    const hero = document.querySelector(`.${headerClass}`)
    const heroHeight = hero.offsetHeight
    const menuElement = document.querySelector(`.${menu.wrapper}`)
    const menuHeight = menuElement.offsetHeight
    const scrolledWindow = window.scrollY
    const stickyClass = navigation.sticky

    const totalHeight = heroHeight + menuHeight

    if (scrolledWindow > totalHeight) {
      wrapper.classList.add(stickyClass)
    } else {
      wrapper.classList.remove(stickyClass)
    }
  })
}

export default stickyNavigation
