import stickyNavigation from './sticky-navigation'
import headroom from './headroom'

const navigation = () => {
  headroom().init()
  stickyNavigation()
}

export default navigation
