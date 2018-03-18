import stickyNavigation from './sticky-navigation'
import headroom from './headroom'
import scrollToTop from './scroll-to-top'

const navigation = () => {
  headroom().init()
  stickyNavigation()
  scrollToTop()
}

export default navigation
