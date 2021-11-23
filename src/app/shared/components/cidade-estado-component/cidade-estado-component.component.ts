import { CidadeBr } from './../../models/cidade-br.models';
import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit, NgModule } from '@angular/core';
import { CidadeEstadoPageComponent } from '../../../pages/cidade-estado-page/cidade-estado-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {DevExtremeModule, DxFormModule, DxSelectBoxModule} from 'devextreme-angular';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { HttpClient } from '@angular/common/http';
import { CidadeEstadoService } from '../../services/cidade-estado.service';
import { EstadoBr } from '../../models/estado-br.models';



@Component({
  selector: 'app-cidade-estado-component',
  templateUrl: './cidade-estado-component.component.html',
  styleUrls: ['./cidade-estado-component.component.scss']
})
export class CidadeEstadoComponentComponent implements OnInit {

  estados: EstadoBr[] = [];
  cidades: CidadeBr[] = [];

  estado:  EstadoBr = new EstadoBr();




  constructor(private http: HttpClient,
              private cidadeEstadoService: CidadeEstadoService) { }

  ngOnInit(): void {
    this.cidadeEstadoService.getEstadosBr()
    .subscribe( (x: EstadoBr[]) => {
      this.estados = x;
    });

  }


  onValueChangeEstado(event: any){
    this.cidadeEstadoService.getCidadesBr(event.value)
      .subscribe( x => {
          this.cidades = x;

        }
      );
  }


}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxSelectBoxModule,
    DevExtremeModule
  ],
  declarations: [ CidadeEstadoComponentComponent ],
  exports: [ CidadeEstadoComponentComponent ]
})
export class CidadeEstadoComponentModule {}
