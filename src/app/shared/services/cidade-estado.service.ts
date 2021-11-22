import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoBr } from '../models/estado-br.models';

@Injectable({
  providedIn: 'root'
})
export class CidadeEstadoService {

  sigla?: string;

  constructor(private http: HttpClient) { }

  getEstadosBr(){
    return this.http.get<EstadoBr>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.sigla}/distritos`)
    .pipe();
  }
}
