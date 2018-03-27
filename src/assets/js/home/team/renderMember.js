import scrapMemberInfo from './scrapMemberInfo'
import { team } from 'styles'
import moduleSelector from '../../tools/moduleSelector'

const renderMember = id => {
  // Gather all relevant info
  const memberIndex = Number(id)
  const members = document.querySelectorAll('[data-team]')
  const membersLength = members.length - 1
  const currentMember = members[memberIndex]
  const currentInfo = scrapMemberInfo(currentMember)
  const { name, title, extra, info, picture } = currentInfo

  const nextTest = memberIndex + 1

  const nextId = nextTest > membersLength
    ? 0
    : memberIndex + 1

  const prevId = memberIndex - 1 < 0
    ? membersLength
    : memberIndex - 1

  const detail = team.detail

  // Gather all places we need to render
  const nameContainer = moduleSelector(detail.name)
  const titleContainer = moduleSelector(detail.title)
  const extraContainer = moduleSelector(detail.extra)
  const copyContainer = moduleSelector(detail.copy)
  const imgContainer = moduleSelector(detail.pic)
  const prevButton = moduleSelector(detail.prev)
  const nextButton = moduleSelector(detail.next)

  const renderer = ({ data, target }) => {
    target.innerHTML = data || ''
  }

  // Render the thing...
  renderer({data: name, target: nameContainer})
  renderer({data: title, target: titleContainer})
  renderer({data: extra, target: extraContainer})
  renderer({data: info, target: copyContainer})
  imgContainer.innerHTML = picture
    ? `<img src="${picture}" />`
    : `<svg width="119" height="119" viewBox="0 0 119 119"><rect width="119" height="119" x="21" fill="#E8EDF0" fill-rule="evenodd" rx="5" transform="translate(-21)"/></svg>`
  prevButton.setAttribute('data-id', Number(prevId))
  nextButton.setAttribute('data-id', Number(nextId))
}

export default renderMember
