const scrapMemberInfo = member => {
  const name = member.querySelector('h4')
  const title = member.querySelector('h5')
  const extra = member.querySelector('h6')
  const info = member.querySelector('div')
  const picture = member.querySelector('button img')

  // Short circuit
  const getText = element => element ? element.textContent : false

  return {
    name: getText(name),
    title: getText(title),
    extra: getText(extra),
    info: info ? info.innerHTML : false,
    picture: picture ? picture.getAttribute('src') : false
  }
}

export default scrapMemberInfo
