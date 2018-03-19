import YouTubePlayer from 'youtube-player'
import { home } from 'styles'

const video = () => {
  const { intro } = home
  const button = document.querySelector(`.${intro.button}`)

  button.addEventListener('click', async event => {
    const videoId = button.getAttribute('data-youtube-id')
    const wrapper = document.querySelector(`.${intro.iframe}`)

    const player = YouTubePlayer('youtube-player', {
      videoId,
      playerVars: {
        controls: 0,
        modestbranding: 1,
        origin: 0,
        rel: 0,
        showInfo: 0
      }
    })
    await player.playVideo()
    // Button pls die in peace now...
    button.parentNode.removeChild(button)
    // responsive iframe show yourself!
    wrapper.setAttribute('style', 'display: block')
  })
}

export default video
