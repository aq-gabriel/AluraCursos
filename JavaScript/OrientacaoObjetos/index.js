import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from './ContaPoupanca.js'

const cliente1 = new Cliente("Gabriel", 11122233309);

const contaCorrente = new ContaCorrente(1001, cliente1);
contaCorrente.depositar(500);
contaCorrente.sacar(10)


const contaPoupanca = new ContaPoupanca(0,1001, cliente1)
contaPoupanca.depositar(500)
contaPoupanca.sacar(10)


console.log('====================================');
console.log(contaCorrente);

console.log('====================================');
console.log(contaPoupanca);
