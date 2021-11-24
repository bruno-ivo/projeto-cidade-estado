import { CidadeBr } from './../../models/cidade-br.models';
import { map, switchMap } from 'rxjs/operators';
import {
  Component,
  OnInit,
  NgModule,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CidadeEstadoPageComponent } from '../../../pages/cidade-estado-page/cidade-estado-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  DevExtremeModule,
  DxFormModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import { HttpClient } from '@angular/common/http';
import { CidadeEstadoService } from '../../services/cidade-estado.service';
import { EstadoBr } from '../../models/estado-br.models';

@Component({
  selector: 'app-cidade-estado-component',
  templateUrl: './cidade-estado-component.component.html',
  styleUrls: ['./cidade-estado-component.component.scss'],
})
export class CidadeEstadoComponentComponent implements OnInit {
  estados: EstadoBr[] = [];

  cidades: CidadeBr[] = [];

  @Input()
  cidadeValue: string = '';

  @Input()
  estadoValue: string = '';

  @Output()
  mudouValorCidade = new EventEmitter();

  @Output()
  mudouValorEstado = new EventEmitter();

  estado: EstadoBr = new EstadoBr();

  //displayExpr = this.estado.nome + '-' + this.estado.id;

  constructor(
    private http: HttpClient,
    private cidadeEstadoService: CidadeEstadoService
  ) {}

  ngOnInit(): void {
    this.cidadeEstadoService.getEstadosBr().subscribe((x: EstadoBr[]) => {
      this.estados = x;
    });
  }

  onValueChangeEstado(event: any) {
    this.cidadeEstadoService.getCidadesBr(event.value.id).subscribe((x) => {
      this.cidades = x;
    });
    this.mudouValorEstado.emit({ estados: event.value });
  }

  onValueChangeCidade(event: any) {
    this.mudouValorCidade.emit({ cidades: event });
  }

  getDisplayEstado(item: any) {
    if (item) {
      return item.sigla + ' - ' + item.nome;
    }
    return item;
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxSelectBoxModule,
    DevExtremeModule,
  ],
  declarations: [CidadeEstadoComponentComponent],
  exports: [CidadeEstadoComponentComponent],
})
export class CidadeEstadoComponentModule {}
