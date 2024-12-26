alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto)
{
    chute = prompt(`Escolha um número  entre 1 e 10`);
    if (chute == numeroSecreto) 
        {
        break;
        }
        
        else
        {
            if(numeroSecreto > chute)
            {
                alert(`O número é maior que ${chute}!`);
            } 
        
            if(numeroSecreto < chute)
            {
                alert(`O número é menor que ${chute}!`);
            }

            tentativas++;
        }    
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Boa!! Você Acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1)
//{
//    alert(`Boa!! Você descobriu o número secreto!! O número era ${numeroSecreto} com ${tentativas} tentativas.  `)
//}
//else
//{
//   alert(`Boa!! Você descobriu o número secreto!! O número era ${numeroSecreto} com ${tentativas} tentativa.  `)
//}