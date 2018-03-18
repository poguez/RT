import stickyNavigation from './sticky-navigation'
import headroom from './headroom'
import scrollToTop from './scroll-to-top'
import scrollSpy from './scroll-spy'

const navigation = () => {
  headroom().init()
  stickyNavigation()
  scrollToTop()
  scrollSpy()
}

export default navigation
