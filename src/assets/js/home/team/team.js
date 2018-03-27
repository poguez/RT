import openDetailPageListener from './openDetailPage'
import closeModal from './closeModal'
import { team as teamStyles } from 'styles'
import { details } from './helpers'

import renderMember from './renderMember'

const team = () => {
  openDetailPageListener()

  const closeButton = document.querySelector(`.${teamStyles.detail.exit}`)
  const closeAlt = document.querySelector(`.${teamStyles.detail['foot-close']}`)

  closeButton.addEventListener('click', closeModal)
  closeAlt.addEventListener('click', closeModal)

  renderMember(3)

  // Hide when hitting escape
  document.body.addEventListener('keyup', event => {
    if (event.keyCode === 27 && details.classList.contains(teamStyles.detail.active)) {
      closeModal()
    }
  })
}

export default team
