import { Conta } from './Conta.js';

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0,1003,cliente) 
    }

    sacar(valor){
        let taxa = 1.01;
       
        return this._sacar(taxa, valor);
    }
}