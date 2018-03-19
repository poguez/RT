import { roadmap } from 'styles'
import loopQuery from '../tools/loopQuery'

const boxAccordion = () => {
  const { box } = roadmap

  const triggers = document.querySelectorAll(`.${box.button}`)

  loopQuery(triggers, (button, index) => {
    button.addEventListener('click', event => {
      const container = button.parentNode
      const expanded = box.expanded
      const span = button.querySelector('span')
      const svg = button.querySelector('svg')
      const rotated = box.rotated

      if (container.classList.contains(expanded)) {
        container.classList.remove(expanded)
        span.innerText = 'Read More'
        svg.classList.remove(rotated)
      } else {
        container.classList.add(expanded)
        span.innerText = 'Read Less'
        svg.classList.add(rotated)
      }
    })
  })
}

export default boxAccordion
