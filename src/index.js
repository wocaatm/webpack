function createDom () {
  const div = document.createElement('div')
  div.innerHTML = 'hello webpack'
  
  return div
}

document.body.appendChild(createDom())