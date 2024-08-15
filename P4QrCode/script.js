const button = document.querySelector('button')
const text = document.querySelector('input')
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
const img = document.querySelector('img')
const imgBox = document.querySelector('#imgBox')

button.addEventListener('click', () => {
  if(text.value === ''){
    alert('You must type something')
  }
  else{
   getCode()
   imgBox.classList.add('show-img')
  }
})
async function getCode(){
  img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text.value
}