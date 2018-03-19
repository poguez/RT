import { team } from 'styles'

export const teamMembers = document.querySelectorAll('[data-team]')

export const totalMates = teamMembers.length

export const matesLength = totalMates - 1

export const getPrev = index => index === 0
  ? teamMembers[matesLength]
  : teamMembers[index - 1]

export const getNext = index => index === matesLength
  ? teamMembers[0]
  : teamMembers[index + 1]

export const details = document.querySelector(`.${team.detail.wrapper}`)
