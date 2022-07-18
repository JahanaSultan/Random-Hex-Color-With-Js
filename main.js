let main = document.querySelector('.main')
let code = document.querySelector('.code')
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

var stopbtn = document.querySelector('.btnstop')
var startbtn = document.querySelector('.btnstart')

const randomColor = () => {
  let empty = []
  for (let i = 1; i < 7; i++) {
    let index = Math.round(Math.random() * (arr.length - 1))
    empty.push(arr[index])
    var colorCode = empty.join('')
  }
  main.style.background = `#${colorCode}`
  code.innerHTML = `#${colorCode}`
}



function myfunction() {
  x = setInterval(randomColor, 1000)
}

startbtn.addEventListener('click', () => {
  myfunction()
})
stopbtn.addEventListener('click', () => {
  clearInterval(x)
})
