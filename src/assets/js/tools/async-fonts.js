import FontFaceObserver from 'fontfaceobserver'

const asyncFonts = async ({ href, observer }) => {
  // Load href from somewhere...
  if (href) {
    const link = document.createElement('link')
    link.href = href
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }

  const name = observer.toLocaleLowerCase().split(' ').join('-')
  const asyncFont = new FontFaceObserver(observer)

  try {
    await asyncFont.load()
    document.documentElement.classList.add(`${name}`)
  } catch (error) {
    console.log(error)
    document.documentElement.classList.add(`${name}-error`)
  }
}

export default asyncFonts
