import { environment } from './../../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public menuEvent = new EventEmitter<boolean>();
  public autenticado = false;
  constructor(
    private http: HttpClient
  ) { }

  public login(request: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST',
      })
    };
    return this.http.post<any>(`${environment.api_url}/users/login`, request, httpOptions).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        sessionStorage.setItem('name', response.username.name);
        if(response.username.permission === 'ADMINISTRADOR'){
          sessionStorage.setItem('context', 'true');
        }
        this.menuEvent.emit(true);
        this.autenticado = true;
        return response;
      }),
      catchError((erro: HttpErrorResponse) => {
        this.menuEvent.emit(false);
        this.autenticado = false;
        return throwError(erro);
      })
    );
  }

  public usuarioAutenticado() {
    return this.autenticado;
  }
}
