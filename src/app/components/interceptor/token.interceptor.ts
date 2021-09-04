import { environment } from './../../../environments/environment';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const requestUrl: Array<string> = req.url.split('/');
    const api: Array<string> = environment.api_url.split('/');
    if (token && (requestUrl[2] === api[2])) {
      const newRequest = req.clone({
        setHeaders: {'Authorization': `Bearer ${token}`}
      });
      return next.handle(newRequest);
    } else {
      return next.handle(req);
    }
  }

}
