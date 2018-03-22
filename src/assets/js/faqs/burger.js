import { faqs, team } from 'styles'

const burger = () => {
  const { menu, 'mobile-menu': mobileMenu } = faqs
  const { detail } = team
  const linesToggle = document.querySelector(`.${menu.toggle}`)
  const wrapper = document.querySelector(`.${mobileMenu.wrapper}`)
  const closeToggle = document.querySelector(`.${mobileMenu.close}`)

  const toggleMenu = () => {
    wrapper.classList.toggle(mobileMenu.active)
    document.body.classList.toggle(detail.frozen)
  }

  linesToggle.addEventListener('click', toggleMenu)
  closeToggle.addEventListener('click', toggleMenu)
}

export default burger
