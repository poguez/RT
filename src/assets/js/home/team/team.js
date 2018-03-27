import openDetailPageListener from './openDetailPage'
import flickMembersListener from './flickMembers'
import closeListeners from './closeListeners'

const team = () => {
  openDetailPageListener()
  flickMembersListener()
  closeListeners()
}

export default team
