import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EstadoBr } from '../models/estado-br.models';
import { CidadeBr } from '../models/cidade-br.models';

@Injectable({
  providedIn: 'root'
})
export class CidadeEstadoService {

  constructor(private http: HttpClient) { }

  getEstadosBr():Observable<EstadoBr[]>{
    return this.http.get<EstadoBr[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
  }

  getCidadesBr(idEstado: string): Observable<CidadeBr[]>{
    return this.http.get<CidadeBr[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
      .pipe(
        map((cidades:CidadeBr[]) => cidades.filter(c => c.estado == idEstado))
      );
  }
}
