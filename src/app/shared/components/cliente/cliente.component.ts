import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxFormModule, DxLoadIndicatorModule, DxSelectBoxModule, DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = []

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarCLientes()
    .subscribe(c => this.clientes = c);
  }

}
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DevExtremeModule,
  ],
  declarations: [ClienteComponent],
  exports: [ClienteComponent],
})
export class ClienteComponentModule {}
