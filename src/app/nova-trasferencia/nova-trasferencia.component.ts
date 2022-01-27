import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-trasferencia',
  templateUrl: './nova-trasferencia.component.html',
  styleUrls: ['./nova-trasferencia.component.scss']
})
export class NovaTrasferenciaComponent implements OnInit {

  @Output()
  aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  trasferir(){
    this.aoTransferir.emit(
      {
        valor: this.valor,
        destino: this.destino
      }
    )
  }

}
