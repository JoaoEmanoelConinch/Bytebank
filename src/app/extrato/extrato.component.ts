import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../services/models/transferencia.model';
import { TransferenciaServiceService } from '../services/transferencia-service.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  tranferencias: Transferencia[] = []

  constructor(
    private service: TransferenciaServiceService
  ) { }

  ngOnInit(): void {
    this.service.todas().subscribe((tranferencias: Transferencia[]) => {
      console.log(tranferencias)
      this.tranferencias = tranferencias;
    })
  }

}
