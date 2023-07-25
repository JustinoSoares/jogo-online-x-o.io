

let cont = 0;
let winner_x_ = document.getElementById("winner_x");
let winner_o_ = document.getElementById("winner_o");
let games = document.getElementById("games");

winner_o_.innerHTML = 0;
winner_x_.innerHTML= 0;
games.innerHTML= 0;


let matriz_x = [];
let matriz_o = [];



function xo(pos) {
    let jogos = document.querySelectorAll(".jogo");
    let cards = document.querySelectorAll(".card_col");
    console.log(cont);
    if(cont%2==0){
        cont++;
        jogos[pos].classList.add("x");
        cards[pos].classList.add("desabilitar");

        matriz_x[9]=pos;
        matriz_x.sort((a, b) => a - b);
        winner(cards,matriz_x,matriz_o,jogos);
        console.log(matriz_x);

    }else{
        jogos[pos].classList.add("o");
        cards[pos].classList.add("desabilitar");
        cont++;

        matriz_o[9]=pos;
        matriz_o.sort((a, b) => a - b);
        winner(cards,matriz_x,matriz_o,jogos);
        console.log(matriz_o);

    }
    
    if(cont==9){
        empate(cards,jogos);
        
    }
    
}

function winner(cards,matriz_x,matriz_o,jogos) {
    //Verificar se existe vencedor

    //first row
    if(matriz_x.includes(0) && matriz_x.includes(1) && matriz_x.includes(2)){
       for (let i = 0; i < 9; i++) {
           cards[i].classList.add("desabilitar");
       }
      winner_x("Low one");
      clear(cards,jogos)
    }
     if(matriz_x.includes(3) && matriz_x.includes(4) && matriz_x.includes(5)){ //verificar a segunda row
        for (let i = 0; i <9; i++) {
            cards[i].classList.add("desabilitar");
        }
       
       winner_x("Low two");
       clear(cards,jogos)
    }
    if(matriz_x.includes(6) && matriz_x.includes(7) && matriz_x.includes(8)){ //verificar a terceira row
        for (let i = 0; i <9; i++) {
            cards[i].classList.add("desabilitar");
        }
       winner_x("Low three");
       clear(cards,jogos)
    }
    
    //Verificação das colunas
    if(matriz_x.includes(0) && matriz_x.includes(3) && matriz_x.includes(6)){
        for (let i = 0; i <9; i++) {
            cards[i].classList.add("desabilitar");
        }
       winner_x("col one");
       clear(cards,jogos)
    }

    if(matriz_x.includes(1) && matriz_x.includes(4) && matriz_x.includes(7)){
        for (let i = 0; i <9; i++) {
            cards[i].classList.add("desabilitar");
        }
       winner_x("col Two");
       clear(cards,jogos)
    }
    if(matriz_x.includes(2) && matriz_x.includes(5) && matriz_x.includes(8)){
        for (let i = 0; i <9; i++) {
            cards[i].classList.add("desabilitar");
        }
       winner_x("col three");
       clear(cards,jogos)
    }

    //Verificar a diagonal primária
    if(matriz_x.includes(2) && matriz_x.includes(4) && matriz_x.includes(6)){
        for (let i = 0; i <9; i++) {
            cards[i].classList.add("desabilitar");
        }
       winner_x("Diagonal Primary");
       clear(cards,jogos)
    }
    if(matriz_x.includes(0) && matriz_x.includes(4) && matriz_x.includes(8)){
        for (let i = 0; i <9; i++) {
            cards[i].classList.add("desabilitar");
        }
       winner_x("Diagonal Secondary");
       clear(cards,jogos)
    }







// Verificando o Bola

//first row
if(matriz_o.includes(0) && matriz_o.includes(1) && matriz_o.includes(2)){
    for (let i = 0; i < 9; i++) {
        cards[i].classList.add("desabilitar");
    }
   winner_o("Low one");
   clear(cards,jogos)
 }
  if(matriz_o.includes(3) && matriz_o.includes(4) && matriz_o.includes(5)){ //verificar a segunda row
     for (let i = 0; i <9; i++) {
         cards[i].classList.add("desabilitar");
     }
    
    winner_o("Low two");
    clear(cards,jogos)
 }
 if(matriz_o.includes(6) && matriz_o.includes(7) && matriz_o.includes(8)){ //verificar a terceira row
     for (let i = 0; i <9; i++) {
         cards[i].classList.add("desabilitar");
     }
    winner_o("Low three");
    clear(cards,jogos)
 }
 
 //Verificação das colunas
 if(matriz_o.includes(0) && matriz_o.includes(3) && matriz_o.includes(6)){
     for (let i = 0; i <9; i++) {
         cards[i].classList.add("desabilitar");
     }
    winner_o("col one");
    clear(cards,jogos)
 }

 if(matriz_o.includes(1) && matriz_o.includes(4) && matriz_o.includes(7)){
     for (let i = 0; i <9; i++) {
         cards[i].classList.add("desabilitar");
     }
    winner_o("col Two");
    clear(cards,jogos)
 }
 if(matriz_o.includes(2) && matriz_o.includes(5) && matriz_o.includes(8)){
     for (let i = 0; i <9; i++) {
         cards[i].classList.add("desabilitar");
     }
    winner_o("col three");
    clear(cards,jogos)
 }

 //Verificar a diagonal primária
 if(matriz_o.includes(2) && matriz_o.includes(4) && matriz_o.includes(6)){
     for (let i = 0; i <9; i++) {
         cards[i].classList.add("desabilitar");
     }
    winner_o("Diagonal Primary");
    clear(cards,jogos)
 }
 if(matriz_o.includes(0) && matriz_o.includes(4) && matriz_o.includes(8)){
     for (let i = 0; i <9; i++) {
         cards[i].classList.add("desabilitar");
     }
    winner_o("Diagonal Secondary");
    clear(cards,jogos)
 }
}


function winner_x(nome) {
    Swal.fire({
     position: 'center',
     icon: 'success',
     title: 'Vence o jogador X('+nome+')',
     showConfirmButton: false,
     timer: 2500
   })
   winner_x_.innerHTML++; 
   games.innerHTML++;
}

function winner_o(nome) {

     Swal.fire({
     position: 'center',
     icon: 'success',
     title: 'Vence o jogador O('+nome+')',
     showConfirmButton: false,
     timer: 2500
   })
   winner_o_.innerHTML++; 
   games.innerHTML++;
}

function clear(cards,jogos){
    for (let i = 0; i <9; i++) {
        cards[i].classList.remove("desabilitar");
        jogos[i].classList.remove("x");
        jogos[i].classList.remove("o");
        matriz_x = [];
        matriz_o = [];
        cont = 0;
    }
}

function empate(cards,jogos) {

        //alerta
        let timerInterval
        Swal.fire({
          title: 'O jogo saio empate!',
          html: 'Reiniciando o jogo <b></b> em segundos.',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        //alerta

        for (let i = 0; i <9; i++) {
            cards[i].classList.remove("desabilitar");
            jogos[i].classList.remove("x");
            jogos[i].classList.remove("o");
            matriz_x = [];
            matriz_o = [];
            cont = 0;
        }
    }
    






    let restart = document.getElementById("restart");
     jogos = document.querySelectorAll(".jogo");
     cards = document.querySelectorAll(".card_col");
    restart.addEventListener("click", ()=>{
        clear(cards,jogos)

    });

     


     
    

