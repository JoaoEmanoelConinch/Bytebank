import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaServiceService {

  private  transferencias: any[] = [];

  constructor() { }

  get todasTransferencias(){
    return this.transferencias;
  }

  adicionar( trasferencia: any){
    this.adicionarData(trasferencia)
    this.transferencias.push(trasferencia);
  }

  adicionarData(trasferencia: any){
    trasferencia.data = new Date();
  }

}
