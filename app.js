alert("Boas vindas para o nosso jogo secreto");

let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log('Testando');
let chute
let tentativas = 1;
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 a 10');
    if (chute == numeroSecreto) {
        break;
    }
    else{
        if (numeroSecreto > chute) {
            alert(`O numero secreto é maior que ${chute}`);
    
        }else{
            alert(`O numero secreto é menor que ${chute}`);
    
        }
        tentativas++;
    }

}

    let palavraTentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa'; 
    alert(`Voce conseguiu descobrir o ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
    
   // if (tentativas > 1) {
     //   alert(`Voce conseguiu descobrir o ${numeroSecreto} com ${tentativas} tentativas`);
    // } else {
       // alert(`Voce conseguiu descobrir o ${numeroSecreto} com ${tentativas} tentativa`);
   // }

// ola mundo 
