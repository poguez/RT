import { team } from 'styles'
import { details } from './helpers'

const closeModal = () => {
  const { detail } = team
  document.body.classList.remove(detail.frozen)
  details.classList.remove(detail.active)
}

export default closeModal
