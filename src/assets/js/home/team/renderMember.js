import scrapMemberInfo from './scrapMemberInfo'
import { team } from 'styles'
import moduleSelector from '../../tools/moduleSelector'

const renderMember = memberIndex => {
  const members = document.querySelectorAll('[data-team]')
  const currentMember = members[memberIndex]
  const currentInfo = scrapMemberInfo(currentMember)
  const { name, title, extra, info, picture } = currentInfo

  const detail = team.detail

  const nameContainer = moduleSelector(detail.name)
  const titleContainer = moduleSelector(detail.title)
  const extraContainer = moduleSelector(detail.extra)
  const copyContainer = moduleSelector(detail.copy)
  const imgContainer = moduleSelector(detail.pic)

  const renderer = ({ data, target }) => {
    target.innerHTML = data || ''
  }

  renderer({data: name, target: nameContainer})
  renderer({data: title, target: titleContainer})
  renderer({data: extra, target: extraContainer})
  renderer({data: info, target: copyContainer})
  imgContainer.innerHTML = picture
    ? `<img src="${picture}" />`
    : `<svg width="119" height="119" viewBox="0 0 119 119">
        <rect width="119" height="119" x="21" fill="#E8EDF0" fill-rule="evenodd" rx="5" transform="translate(-21)"/>
      </svg>`
}

export default renderMember
