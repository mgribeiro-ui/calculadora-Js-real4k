function calcular() {
   
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const campoResultado = document.getElementById('resultado');

    
    if (isNaN(num1) || !num2 && num2 !== 0) {
        campoResultado.textContent = "Por favor, digite os dois números.";
        campoResultado.style.color = "red";
        return;
    }

    let resultado;

    
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;//fara a soma dos numeros
            break;
        case 'subtracao':
            resultado = num1 - num2;//fara a subtração dos numeros
            break;
        case 'multiplicacao':
            resultado = num1 * num2;//fara a multiplicação dos numeros
            break;
        case 'divisao':
            
            if (num2 === 0) {
                campoResultado.textContent = "Erro: Não é possível dividir por 0.";
                campoResultado.style.color = "red";
                return;
            }
            resultado = num1 / num2;//fara uma divisão
            break;
        default:
            resultado = "Operação inválida";
    }

   
    campoResultado.textContent = resultado;
    campoResultado.style.color = "green";
}
