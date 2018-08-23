import _ from 'loadsh'

function createDom () {
  const div = document.createElement('div')
  div.innerHTML = _.join(['hello', 'world'])
  
  div.classList.add('app')
  
  div.onclick = function () {
    switchColor()
  }
  return div
}

function switchColor () {
  import(/* webpackChunkName: "jquery"*/ 'jquery').then(m => {
    const $ = m.default
    $('.index').css({color: 'red'})
  })
}

document.body.appendChild(createDom())

