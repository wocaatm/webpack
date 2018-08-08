import Math from './lib/math'

function createDom () {
  const div = document.createElement('div')
  div.innerHTML = Math.cube(5)
  return div
}

document.body.appendChild(createDom())