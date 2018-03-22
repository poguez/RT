import stickyNavigation from './sticky-navigation'
import headroom from './headroom'
import scrollSpy from './scroll-spy'
import smoothScroll from './smooth-scroll'

const navigation = () => {
  headroom().init()
  stickyNavigation()
  scrollSpy()
  smoothScroll()
}

export default navigation
