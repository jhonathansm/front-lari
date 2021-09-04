import { environment } from './../../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
    return this.http.post<any>(`${environment.api_url}/users/login`, request).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        return response;
      }),
      catchError((erro: HttpErrorResponse) => {
        return throwError(erro);
      })
    );
  }
}
