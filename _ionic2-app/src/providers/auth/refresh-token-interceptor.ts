import {
    HTTP_INTERCEPTORS, HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponseBase
} from "@angular/common/http";
import {Injectable, Injector} from "@angular/core";
import {Observable} from "rxjs";
import {JwtInterceptor} from "@auth0/angular-jwt";
import {AuthProvider} from "./auth";
import {App} from "ionic-angular";
import {flatMap, tap} from "rxjs/operators";
import {LoginPage} from "../../pages/login/login";

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor{

    private _jwtInterceptor: JwtInterceptor;

    constructor(
        private authService: AuthProvider,
        private app: App,
        private injector: Injector
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._jwtInterceptor;
        if (!this.authService.getToken() || !this.isTokenExpired() || req.url === this.authService.refreshUrl()) {
            return this.handleRequest(req, next);
        } else {
            console.log('tem que renovar o token');
            return this.authService.refresh()
                .pipe(
                    flatMap(data => {
                        const obs = this._jwtInterceptor.intercept(req, next);
                        this.setPipes(obs);
                        return obs;
                    })
                )
        }
    }

    private isTokenExpired() {
        const token = this.authService.getToken();
        return this.authService.isTokenExpired(token);
    }

    private handleRequest(req: HttpRequest<any>, next: HttpHandler) {
        const obs = next.handle(req);
        this.setPipes(obs);
        return obs;
    }

    private get jwtInterceptor(): JwtInterceptor {
        if (this._jwtInterceptor) {
            return this._jwtInterceptor;
        }

        const interceptors = this.injector.get(HTTP_INTERCEPTORS);

        const index = interceptors.findIndex((interceptor) => interceptor instanceof JwtInterceptor);

        this._jwtInterceptor = interceptors[index] as JwtInterceptor;
        return this._jwtInterceptor;
    }

    private setPipes(observable: Observable<any>) {
        observable.pipe(
            tap((event: HttpEvent<any>) => {
                console.log(event);
                this.setNewTokenIfResponseValid(event);
            }, (eventError: HttpEvent<any>) => {
                console.log('error refresh');
                this.setNewTokenIfResponseValid(eventError);
                this.redirectToLoginIfUnauthenticated(eventError);
            })
        );
    }

    private setNewTokenIfResponseValid(event: HttpEvent<any>) {
        if (event instanceof HttpResponseBase) {
            const authorizationHeader = event.headers.get('authorization');

            if (authorizationHeader) {
                console.log('set new token', authorizationHeader);
                const token = authorizationHeader.split(' ')[1];
                this.authService.setToken(token);
            }
        }
    }

    private redirectToLoginIfUnauthenticated(eventError: HttpEvent<any>) {
        if (eventError instanceof HttpErrorResponse && eventError.status === 401) {
            this.authService.setToken(null);
            console.log('não autenticou.');
            this.app.getRootNav().setRoot(LoginPage);
        }
    }
}