import SmoothScroll from 'smooth-scroll'
import { home } from 'styles'

const scrollToTop = () => {
  const styles = home['sticky-navigation']
  const scroll = new SmoothScroll()

  const button = document.querySelector(`.${styles['scroll-top']}`)

  button.addEventListener('click', event => {
    scroll.animateScroll(0)
  })
}

export default scrollToTop
