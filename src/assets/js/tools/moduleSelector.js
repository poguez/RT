const moduleSelector = module => {
  const transformed = module.split(' ')
    .map(c => `.${c}`)
    .join('')
  return document.querySelector(transformed)
}

export default moduleSelector
