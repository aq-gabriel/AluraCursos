import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(saldoInicial, agencia, cliente) {
        super(saldoInicial, agencia, cliente);
    }

    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(taxa, valor);
    }
}