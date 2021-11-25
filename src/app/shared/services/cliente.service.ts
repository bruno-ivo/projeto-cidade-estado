import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private readonly APICliente = '/api/clientes';

  listarCLientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.APICliente);
  }
}
