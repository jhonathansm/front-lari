import { map, catchError } from 'rxjs/operators';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interface/produto.interface';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private http: HttpClient
  ) { }

  public cadastroProduto(request: Produto): Observable<any> {
    return this.http.post<any>(`${environment.api_url}/produtos`, request).pipe(
      map((response) => {
        return response;
      }),
      catchError((erro) => {
        return throwError(erro);
      })
    )
  }
}
