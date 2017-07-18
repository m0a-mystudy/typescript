import { Observable } from 'rxjs/Observable';
export declare function hello<T>(this: Observable<T>): Observable<T>;
declare module 'rxjs/Observable' {
    interface Observable<T> {
        hello: typeof hello;
    }
}
