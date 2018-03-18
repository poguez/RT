import { wrapper } from './wrapper'
import { home } from 'styles'

const stickyNavigation = () => {
  window.addEventListener('scroll', event => {
    const heroClass = home.hero.wrapper
    const hero = document.querySelector(`.${heroClass}`)
    const heroHeight = hero.offsetHeight
    const scrolledWindow = window.scrollY
    const stickyClass = home['sticky-navigation'].sticky

    if (scrolledWindow > heroHeight) {
      wrapper.classList.add(stickyClass)
    } else {
      wrapper.classList.remove(stickyClass)
    }
  })
}

export default stickyNavigation
