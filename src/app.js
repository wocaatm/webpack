import $ from 'jquery'

function createDom () {
  const div = document.createElement('div')
  div.innerHTML = "测试"
  
  div.classList.add('app')
  return div
}

function switchColor () {
  $('.app').css({color: 'red'})
}

document.body.appendChild(createDom())

switchColor()

