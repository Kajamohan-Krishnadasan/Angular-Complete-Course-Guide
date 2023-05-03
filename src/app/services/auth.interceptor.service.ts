import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('auth interceptor works');

    const modifiedReqest = req.clone({
      // headers: req.headers.append('Auth', 'KAJAMOHAN auth'),
      // params: req.params.append('auth', 'KAJAMOHAN auth'),
    });

    return next.handle(modifiedReqest);
  }
}
