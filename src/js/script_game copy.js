const div = document.getElementById("cartas")

// redenrizarCartas();

function renderizarCartas() {
//     const arrDuplicado = [...personagens, ...personagens];
//     const personagensEmbaralhados = shuffleArray(arrDuplicado);
//     console.log(personagensEmbaralhados);

//     for (let i = 0; i < personagensEmbaralhados.length; i++) {

// VAREÁVEIS

              // Vai criar a TAG Picture que vai tá dentro da vareável picture.
        let picture = document.createElement("picture")
              // Vai criar a TAG Source que vai tá dentro da vareável source01.
        let source01 = document.createElement("source")
              // Vai criar a TAG Source que vai tá dentro da vareável source02.
        let source02 = document.createElement("source")
              // Vai criar a TAG img que vai tá dentro da vareável carta.
        let carta = document.createElement("img");

 //PARÂMETRO

              // Vai adicionar os parâmetros dentro da vareável source01.
        source01.media="(max-width: 417px)";
        source01.srcset="src/image/images_responsivas/bloco-medio.png";
        source01.type="image/png";

              // Vai adicionar os parâmetros dentro da vareável source02.
        source02.media="(max-width: 1024px)";
        source02.srcset="src/image/images_responsivas/bloco-medio.png";
        source02.type="image/png";

        // Vai adicionar os parâmetros dentro da vareável carta.
        carta.src="src/image/images_responsivas/bloco-grande.png";
        carta.alt="Card do Jogo";
        
//HERDEIROS(FILHOS-TAG)        
            // Vai adicionar dentro da vareável div as vareáveis
            //  [1] - Picture
            //  [2] - Source01
            //  [3] - Source02
            //  [4] - Carta
            //  Tudo isso dentro da div lá em cima.
        div.appendChild(picture);
        picture.appendChild(source01)
        picture.appendChild(source02)
        picture.appendChild(carta)
    }
}

// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   }