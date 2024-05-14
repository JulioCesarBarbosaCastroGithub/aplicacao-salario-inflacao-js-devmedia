import entradaDados from 'readline-sync';

console.log("Escolha uma das alternativas:\n");

console.log("1 - Listar os salários minímos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let opcao = entradaDados.question("\nDigite o numero da sua escolha: ");

let salarioMinimo = {
    ano2010: 510.00,
    ano2011: 545.00,
    ano2012: 622.00,
    ano2013: 678.00,
    ano2014: 724.00,
    ano2015: 788.00,
    ano2016: 880.00,
    ano2017: 937.00,
    ano2018: 954.00,
    ano2019: 998.00,
    ano2020: 1045.00
};

let inflacaoIpca = {
    ano2010: 5.91,
    ano2011: 6.50,
    ano2012: 5.84,
    ano2013: 5.91,
    ano2014: 6.41,
    ano2015: 10.67,
    ano2016: 6.29,
    ano2017: 2.95,
    ano2018: 3.75,
    ano2019: 4.31,
    ano2020: 4.52
};

let diferenca = salarioMinimo.ano2011 - salarioMinimo.ano2010;

let percentualCrescimento = (diferenca / salarioMinimo[2010]) * 100;

if(opcao == 1){

}
else if(opcao == 2){

}
else if(opcao == 3){

}
else{
    console.log("Opção inválida, tente novamente!");
};