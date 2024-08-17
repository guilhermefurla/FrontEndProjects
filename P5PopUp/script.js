const button = document.querySelector('button')
const pop = document.querySelector('#pop')
const ok = document.querySelector('.ok')

button.addEventListener('click', () => {
  pop.classList.toggle('pop')
  pop.classList.toggle('hide')
})
ok.addEventListener('click', () => {
  pop.classList.toggle('pop')
  pop.classList.toggle('hide')
})