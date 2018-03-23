import { tns as tinySlider } from 'tiny-slider/src/tiny-slider.module'
import { home } from 'styles'

const problem = () =>
  tinySlider({
    container: `.${home.problem.problems}`,
    nav: false,
    controls: false,
    mouseDrag: true,
    autoHeight: true,
    responsive: {
      1024: {
        disable: true
      }
    }
  })

export default problem
