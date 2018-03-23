import { faqs, team } from 'styles'
import loopQuery from '../tools/loopQuery'

const burger = () => {
  const { 'mobile-menu': mobileMenu } = faqs
  const { detail } = team
  const wrapper = document.querySelector(`.${mobileMenu.wrapper}`)

  const toggleMenu = () => {
    wrapper.classList.toggle(mobileMenu.active)
    document.body.classList.toggle(detail.frozen)
  }

  const triggers = document.querySelectorAll('[data-menu-trigger]')

  loopQuery(triggers, trigger => {
    trigger.addEventListener('click', toggleMenu)
  })
}

export default burger
