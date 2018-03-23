import { tns as tinySlider } from 'tiny-slider/src/tiny-slider.module'
import { home } from 'styles'

const problem = () =>
  tinySlider({
    container: `.${home.problem.problems}`
  })

export default problem
