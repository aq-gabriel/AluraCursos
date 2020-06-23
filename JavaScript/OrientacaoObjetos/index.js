import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from './Conta/ContaPoupanca.js'
import { ContaSalario } from './Conta/ContaSalario.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const cliente1 = new Cliente("Gabriel", 11122233309);

const contaCorrente = new ContaCorrente(1001, cliente1);
contaCorrente.depositar(500);
contaCorrente.sacar(10);

const contaPoupanca = new ContaPoupanca(0, 1001, cliente1)
contaPoupanca.depositar(500);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(400);
contaSalario.sacar(100);
/*
console.log('====================================');
console.log(contaCorrente);
console.log('====================================');
console.log(contaPoupanca);
console.log('====================================');
console.log(contaSalario);
*/
const diretor = new Diretor('Gabriel Aquino', 10000, 12345678900);
diretor.cadastrarSenha(123456789)
const gerente = new Gerente('Pedro Augusto', 5000, 12345678901);
gerente.cadastrarSenha(12345)

const cliente = new Cliente('Nathalia',12333223,'123');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, 123);


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


