import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../services/models/transferencia.model';
import { TransferenciaServiceService } from '../services/transferencia-service.service';

@Component({
  selector: 'app-nova-trasferencia',
  templateUrl: './nova-trasferencia.component.html',
  styleUrls: ['./nova-trasferencia.component.scss'],
})
export class NovaTrasferenciaComponent implements OnInit {
  @Output()
  aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaServiceService, private router: Router) {}

  ngOnInit(): void {}

  trasferir() {
    const valorEmiir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmiir).subscribe(
      (response) => {
        this.limparCanpos();
        this.router.navigateByUrl('extrato')
      },
      (erro) => console.log(erro)
    );
  }

  limparCanpos() {
    this.valor = 0;
    this.destino = 0;
  }
}
