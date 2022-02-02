import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Transferencia } from "./models/transferencia.model";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaServiceService {

  private  transferencias: any[] = [];

  private url = `${environment.baseUrl}/transferencias`

  constructor(
    private httpClient: HttpClient
  ) { }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar( trasferencia: Transferencia): Observable<Transferencia>{
    this.adicionarData(trasferencia)
    return this.httpClient.post<Transferencia>(this.url,trasferencia);
  }

  adicionarData(trasferencia: any){
    trasferencia.data = new Date();
  }

}
