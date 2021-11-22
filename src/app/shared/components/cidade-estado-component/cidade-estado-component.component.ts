import { Component, OnInit, NgModule } from '@angular/core';
import { CidadeEstadoPageComponent } from '../../../pages/cidade-estado-page/cidade-estado-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxFormModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { HttpClient } from '@angular/common/http';
import { CidadeEstadoService } from '../../services/cidade-estado.service';
import { EstadoBr } from '../../models/estado-br.models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cidade-estado-component',
  templateUrl: './cidade-estado-component.component.html',
  styleUrls: ['./cidade-estado-component.component.scss']
})
export class CidadeEstadoComponentComponent implements OnInit {

  estados: EstadoBr[] = [];

  constructor(private http: HttpClient,
              private cidadeEstado: CidadeEstadoService) { }

  ngOnInit(): void {
    this.cidadeEstado.getEstadosBr()
    .subscribe((res: EstadoBr) => {
      this.estados.push(res);
      console.log(res);

    })
  }


}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxSelectBoxModule
  ],
  declarations: [ CidadeEstadoComponentComponent ],
  exports: [ CidadeEstadoComponentComponent ]
})
export class CidadeEstadoComponentModule {}
