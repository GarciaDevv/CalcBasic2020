let solici = parseInt(prompt("Digite o número desejado:"));
let solici2 = parseInt(prompt("Digite o segundo número desejado:"));
let opera;
let resultado;

while (true) {
    opera = prompt("Digite a operação desejada (+, -, *, /):");

    switch (opera) {
        case "*":
            resultado = solici * solici2;
            console.log(resultado);
            break;

        case "+":
            resultado = solici + solici2;
            console.log(resultado);
            break;

        case "-":
            resultado = solici - solici2;
            console.log(resultado);
            break;

        case "/":
            if (solici2 !== 0) {  // Verifica se não está dividindo por zero
                resultado = solici / solici2;
                console.log(resultado);
            } else {
                console.log("Não é possível dividir por zero.");
            }
            break;

        default:
            console.log("Operação inválida. Tente novamente.");
            continue;  //  pulando o break e voltando o loop do inicio do loop while
    }

    break;  // Sai do loop se a operação for válida
}
