import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaServiceService } from '../services/transferencia-service.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  tranferencias: any[] = []

  constructor(
    private service: TransferenciaServiceService
  ) { }

  ngOnInit(): void {
    this.tranferencias = this.service.todasTransferencias
  }

}
