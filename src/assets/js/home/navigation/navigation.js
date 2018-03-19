import stickyNavigation from './sticky-navigation'
import headroom from './headroom'
import scrollToTop from './scroll-to-top'
import scrollSpy from './scroll-spy'
import smoothScroll from './smooth-scroll'

const navigation = () => {
  headroom().init()
  stickyNavigation()
  scrollToTop()
  scrollSpy()
  smoothScroll()
}

export default navigation
