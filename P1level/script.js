$(document).ready(function(){
  let dayOne = new Date('08/10/2024')
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  let today = new Date(month+'/'+day+'/'+year)

  let body = $('body')
  let element = $('a')
  let attr = $('p')
  let Ltext = $('#text')
  let h3 = $('h3')
  let h4 = $('h4')

  function Atualizar1(){
    let level = 1
    let multiplier = getMultiplier()
    let days = multiplier
    while(multiplier > 10){
      multiplier -= 10
      level++
    }
    body.css('height', '95.6vh')
    $('h3').text(days)
    attr.text(level)
  }
  function Atualizar2(){
    let multiplier = getMultiplier()
    while(multiplier > 10){
      multiplier -= 10
    }
    attr.text(multiplier)
  }
  function getMultiplier(){
    let diff = today.getTime() - dayOne.getTime()
    let ms = 1000 * 3600 * 24
    let multiplier = diff/ms
    return multiplier
  }
  Atualizar1()
  $('#lvl').click(function(){
    if(h3.hasClass('show')){
      Atualizar1()
      Ltext.text('YOU ARE CURRENTLY ON LEVEL')
    }
    else{
      h3.addClass('show')
      h4.addClass('show')
      Atualizar1()
      Ltext.text('YOU ARE CURRENTLY ON LEVEL')
    }
  })
  $('#str').click(function(){
    h3.removeClass('show')
    h4.removeClass('show')
    body.css('height', '100vh')
    Atualizar2()
    Ltext.text('Your Strength Is On Level')
  })
  $('#agl').click(function(){
    h3.removeClass('show')
    h4.removeClass('show')
    body.css('height', '100vh')
    Atualizar2()
    Ltext.text('Your Agility Is On Level')
  })
  $('#int').click(function(){
    h3.removeClass('show')
    h4.removeClass('show')
    body.css('height', '100vh')
    Atualizar2()
    Ltext.text('Your Intelligence Is On Level')
  })
  $('#dis').click(function(){
    h3.removeClass('show')
    h4.removeClass('show')
    body.css('height', '100vh')
    Atualizar2()
    Ltext.text('Your Discipline Is On Level')
  })
})






