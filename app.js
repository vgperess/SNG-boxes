alert("Welcome to the Secret Number Game!!");
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto)
{
    chute = prompt(`Choose a number between 1 and 10`);
    if (chute == numeroSecreto) 
        {
        break;
        }
        
        else
        {
            if(numeroSecreto > chute)
            {
                alert(`The number is higher than ${chute}!`);
            } 
        
            if(numeroSecreto < chute)
            {
                alert(`The number is lower than ${chute}!`);
            }

            tentativas++;
        }    
}

let palavraTentativa = tentativas > 1 ? "tries" : "try";
alert(`Nice!! You got the number ${numeroSecreto} with ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1)
//{
//    alert(`Boa!! Você descobriu o número secreto!! O número era ${numeroSecreto} com ${tentativas} tentativas.  `)
//}
//else
//{
//   alert(`Boa!! Você descobriu o número secreto!! O número era ${numeroSecreto} com ${tentativas} tentativa.  `)
//}