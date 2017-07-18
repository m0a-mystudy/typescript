import { Observable } from 'rxjs/Observable';

export function hello <T>(this: Observable<T> ): Observable<T> {
    console.log('hello');
    return this;
}

Observable.prototype.hello = hello;

declare module 'rxjs/Observable' {
    // tslint:disable-next-line:no-shadowed-variable
    interface Observable<T> {
        hello: typeof hello;
    }
}
