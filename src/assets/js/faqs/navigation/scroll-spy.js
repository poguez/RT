import gumshoe from 'gumshoejs'
import { wrapper } from './wrapper'

const scrollSpy = () => gumshoe.init({
  offset: wrapper.offsetHeight
})

export default scrollSpy
