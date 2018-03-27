import { team } from 'styles'
import moduleSelector from '../../tools/moduleSelector'
import renderMember from './renderMember'

const clickHandler = event => {
  const me = event.currentTarget
  const id = me.getAttribute('data-id')
  renderMember(id)
}

const flickMembersListener = () => {
  const detail = team.detail
  const nextBtn = moduleSelector(detail.next)
  const prevBtn = moduleSelector(detail.prev)

  nextBtn.addEventListener('click', clickHandler)
  prevBtn.addEventListener('click', clickHandler)
}

export default flickMembersListener
