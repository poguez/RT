import loopQuery from '../../tools/loopQuery'
import { team } from 'styles'
import { details } from './helpers'

// import renderMember from './renderMember'

const openDetailPage = () => {
  const { detail } = team
  const teamMembers = document.querySelectorAll('[data-team] button')
  loopQuery(teamMembers, (button, index) => {
    button.addEventListener('click', event => {
      document.body.classList.add(detail.frozen)
      details.classList.add(detail.active)
      // renderMember(index)
    })
  })
}

export default openDetailPage
