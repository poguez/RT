import loopQuery from '../tools/loopQuery'
import { faqs } from 'styles'

const accordion = () => {
  const accordions = document.querySelectorAll('[data-accordion]')
  const { accordion: styles } = faqs

  loopQuery(accordions, accordion => {
    const content = accordion.querySelector('[data-content]')
    content.style.maxHeight = '0'
    content.style.overflow = 'hidden'
    content.style.transition = '0.25s'

    const button = accordion.querySelector('[data-trigger]')
    button.addEventListener('click', event => {
      accordion.classList.toggle(styles.active)

      content.style.maxHeight = accordion.classList.contains(styles.active)
        ? `${content.scrollHeight}px`
        : '0'
    })
  })
}

export default accordion
