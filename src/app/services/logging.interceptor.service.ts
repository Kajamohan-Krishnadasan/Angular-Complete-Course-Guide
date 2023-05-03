import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('logging interceptor works');

    // const modifiedReqest = req.clone({
    //   headers: req.headers.append('Auth', 'KAJAMOHAN logging  ' ),
    // });

    return next.handle(req).pipe(
      tap((event) => {
        console.log('logging Interceptor tap event : ', event);

        if (event.type === HttpEventType.Response) {
          console.log('logging response received from server');
          console.log('logging Interceptor tap body : ', event.body);
        }

        if (event.type === HttpEventType.Sent) {
          console.log('logging request sent to server');
        }

      })
    );
  }
}
