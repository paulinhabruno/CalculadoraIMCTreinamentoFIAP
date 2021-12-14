'use strict'; // novos programadores usam para ser mais rigoroso com o código.

function calcularImc () { 
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value; // nome fica mais claro pq está dentro do escopo, ou seja, não é global.
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome === '' || altura === '' || peso === ''){
        resultado.textContent = 'Preencha todos os campos!';
    } else {
        const imc = peso / (altura * altura);
        let mensagem = ''; // criou esse let para que reconheça a variável que apresentará a mensagem diferente abaixo.

        if(imc < 18.5){
            mensagem = 'está abaixo do peso.';
        } else if (imc <25) {
            mensagem = 'e você está abaixo com o peso ideal. <div class = verde>Parabéns!</div>';            
        } else if ( imc < 30){
            mensagem = 'levemente acima do peso.'
        } else if (imc < 35){
            mensagem = 'obesidade grau I.'            
        } else if (imc < 40){
            mensagem = 'obesidade grau II.'            
        } else {
            mensagem = 'obesidade grau III. <div class = vermelho>Cuidado! </div>'            
        }

        resultado.innerHTML = `${nome} seu imc é: ${imc.toFixed(2)} ${mensagem}`; // foi colocado o innerhtml para que o código pudesse entender as tags div. Contudo, existe outra forma mais segura. 

  // resultado.textContent = nome + " seu imc é " + imc.toFixed(2); // Igual ao anterior. Para colocar o conteúdo na caixa de resultado
    // o toFixed é para fixar em um número específico de casas decimais.
    }

}


document.getElementById('calcular').addEventListener('click',calcularImc);