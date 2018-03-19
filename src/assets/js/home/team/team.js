import openDetailPage from './openDetailPage'
import closeModal from './closeModal'
import { team as teamStyles } from 'styles'
import { details } from './helpers'

const team = () => {
  openDetailPage()

  const closeButton = document.querySelector(`.${teamStyles.detail.exit}`)

  closeButton.addEventListener('click', closeModal)

  // Hide when hitting escape
  document.body.addEventListener('keyup', event => {
    if (event.keyCode === 27 && details.classList.contains(teamStyles.detail.active)) {
      closeModal()
    }
  })
}

export default team
