/*game screen*/
width = 0
height = 0
life = 1
time = 15


cronometro = setInterval(() => {
  time --



  if(time < 0){
    //winner
    clearInterval(cronometro) //clean memory
    window.location.href = "win.html"
  }else{
    document.getElementById('tempo').innerHTML = time
  }
}, 1000);


function updateScreen(){
  //define the size when to resize the screen
  width = window.innerWidth
  height = window.innerHeight
}


updateScreen()

function randomicPosition(){
  //generate randomic positions
  sideMosquito = randomicSide()
  //remover mosquito anterior ,caso exista
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
    document.getElementById("S2" + life).src = "../assets/../imagens/coracao_vazio.png"

    //point for game over
    if(life < 3){
      life ++
    }else{
      //redireciona o user para outra página
      window.location.href="endGame.html"
    }
  }
    if(sideMosquito == 'ladoA'){
      positionX = Math.floor(Math.random() * width) - 90
      positionY = Math.floor(Math.random() * height) - 90
      positionX = positionX < 0 ? 0 : positionX
      positionY = positionY < 0 ? 0 : positionY

      //create html element
      mosquito = document.createElement('img')
      mosquito.id = 'mosquito'
      mosquito.src = '/imagens/mosca.png'
      mosquito.className = randomicSize(mosquito)
      mosquito.style.position = 'absolute'
      mosquito.style.left = positionX + 'px'
      mosquito.style.top = positionY + 'px'
      mosquito.onclick = function(){ //when clicking, removes the mosquito
        this.remove()
      }
      //create children in body
      document.body.appendChild(mosquito)
    }else{
      positionX = Math.floor(Math.random() * width) - 90
      positionY = Math.floor(Math.random() * height) - 90
      positionX = positionX < 0 ? 0 : positionX
      positionY = positionY < 0 ? 0 : positionY

      //create html element
      mosquito = document.createElement('img')
      mosquito.id = 'mosquito'
      mosquito.src = '/imagens/mosca.png'
      mosquito.className = randomicSize(mosquito) + ' ladoB'
      mosquito.style.position = 'absolute'
      mosquito.style.left = positionX + 'px'
      mosquito.style.top = positionY + 'px'
      mosquito.onclick = function(){ //when clicking, removes the mosquito
        this.remove()
      }
      document.body.appendChild(mosquito)
    }

  }



function randomicSize(html){
  //generate randomic sizes
  valor = Math.floor(Math.random() * 3)
  switch(valor){
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}


function randomicSide(){
  valor1 = Math.floor(Math.random() * 2)
  switch(valor1){
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}


/*after gameover*/
function restart(){
  window.close()
  return window.location.href = "index.html"
}




