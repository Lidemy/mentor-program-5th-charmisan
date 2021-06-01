const element = document.querySelector('.question__block')
element.addEventListener('click', (e) => {
  e.target.closest('.question__site').classList.toggle('answrer__hidden')
})
