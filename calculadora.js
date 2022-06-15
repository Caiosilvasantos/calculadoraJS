function calculadora(){
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - subtracao (-)\n - 3 - multiplicacao (*)\n 4- Divisao real (/)\n 5 - Divisao inteira(%)\n 6 - potenciacao (**)');

if (!operacao || operacao >= 7){
    alert('Erro - Operaçao invalida');
    calculadora();
}else {
    let n1 = Number(prompt('Digite o primeiro valor:'));
    let n2 = Number(prompt('Digite o segundo valor:'));
    let resultado;

    if (!n1 || !n2){
        alert('Paramentros invalidos')
        calculadora();
    }else {
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();   
        }
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`) 
            novaOperacao();    
        }
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();     
        }
        function divisaoReal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();     
        }
        function divisaoInteira(){
            resultado = n1 % n2;
            alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperacao();     
        }
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a ${resultado} `)
            novaOperacao();  
        }
        function novaOperacao(){
            let opcao = prompt('Deseja fazer outra Operação?\n 1 - Sim \n 2 - Não')
            if (opcao == 1){
                calculadora();
            }else if (opcao == 2){
                alert("Operacao Finalizada");
            }else{
                alert('Digite uma opçao valida')
                novaOperacao();
            }
        }
    }
    
    
    
    if (operacao ==1){
        soma();
    } else if (operacao ==2){
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    } else if (operacao ==4){
        divisaoReal();
    }else if (operacao ==5){
        divisaoInteira();
    }else if (operacao == 6){
        potenciacao();
    }
}


}


calculadora()