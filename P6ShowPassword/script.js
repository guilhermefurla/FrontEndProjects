const input = document.querySelector('#password')
const imag = document.querySelector('#eye')

imag.addEventListener('click', () => {
  if(input.type == 'password'){
    input.type = 'text'
    imag.src = 'Images/eye-open.png'
  }else{
    input.type = 'password'
    imag.src = 'Images/eye-close.png'
  }
})