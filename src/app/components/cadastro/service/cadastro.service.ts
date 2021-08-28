import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  public cadastro(request: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST',
      })
    };
    request.permission = "SIMPLES";
    return this.http.post<any>("http://localhost:8080/users", request, httpOptions).pipe(
      map((response: HttpResponse<any>) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error);
      }),
    );
  }
}
