import { map, catchError, delay } from 'rxjs/operators';
import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public listarProtudos(): Observable<any> {
    return this.http.get(`${environment.api_url}/produtos`).pipe(
      map((response) => {
        return response;
      }),
      catchError((erro) => {
        return throwError(erro);
      })
    )
  }

  public delete(id: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Headers': 'Origin, Content-Type',
          'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
      })
    };
    return this.http.delete(`${environment.api_url}/produtos/${id}`, httpOptions).pipe(
      delay(100),
      map((res) => {
        console.log(res);
      }, (erro: any) => {
        console.log(erro);
      })
    )
  }

  public edit(element: any, id: any): Observable<any> {
    return this.http.put(`${environment.api_url}/produtos/${id}`, element).pipe(
      map((res) => {
        return res;
      }, (erro: any) => {
        return throwError(erro);
      })
    )
  }
}
