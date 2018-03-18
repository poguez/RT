import Headroom from 'headroom.js'
import { wrapper } from './wrapper'

const head = () => {
  const headroom = new Headroom(wrapper, {
    classes: {
      // when element is initialised
      initial: 'sticky',
      // when scrolling up
      pinned: 'pinned',
      // when scrolling down
      unpinned: 'unpinned',
      // when above offset
      top: 'top',
      // when below offset
      notTop: 'not-top',
      // when at bottom of scoll area
      bottom: 'bottom',
      // when not at bottom of scroll area
      notBottom: 'not-bottom'
    },
  })
  return headroom
}

export default head
