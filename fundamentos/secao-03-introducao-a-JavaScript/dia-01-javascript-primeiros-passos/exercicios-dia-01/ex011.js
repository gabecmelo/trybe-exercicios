let salarioBruto = 3000
let salarioBase;
let salarioLiquido;

let inssFaixa1 = 1556.94 // 8%
let inssFaixa2 = 2594.92 // 9%
let inssFaixa3 = 5189.82 // 11%

let impRendFaixa1 = 1903.98 // Isento de IR
let impRendFaixa2 = 2826.65 // 7,5% - 142,80
let impRendFaixa3 = 3751.05 // 15% - 354,80
let impRendFaixa4 = 4664.68 // 22,5% - 636,13
                            // 27,5% - 869,36

//Cálculo do salário base

if (salarioBruto <= 0) {
  console.log('[ERRO] Salário inválido, insira um salário maior que 0.')
} else if (salarioBruto < inssFaixa1) {
  salarioBase = salarioBruto - (salarioBruto * 0.08)
} else if (salarioBruto < inssFaixa2) {
  salarioBase = salarioBruto - (salarioBruto * 0.09)
} else if (salarioBruto < inssFaixa3) {
  salarioBase = salarioBruto - (salarioBruto * 0.11)
} else if (salarioBruto > inssFaixa3) {
  salarioBase = salarioBruto - (570.88)
}

//Cálculo do salário líquido

if (salarioBase < impRendFaixa1) {
  salarioLiquido = salarioBase
} else if (salarioBase < impRendFaixa2) {
  salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80)
} else if (salarioBase < impRendFaixa3) {
  salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80)
} else if (salarioBase < impRendFaixa4) {
  salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13)
} else {
  salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36)
}

console.log(`O salário líquido dessa pessoa é de R$${salarioLiquido.toFixed(2)}.`)
