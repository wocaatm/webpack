import _ from 'loadsh'

function createDom () {
  const div = document.createElement('div')
  div.innerHTML = _.join(['hello', 'webpack'])
  
  return div
}

document.body.appendChild(createDom())