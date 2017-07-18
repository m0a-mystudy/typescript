import { Observable } from 'rxjs/Observable';
import 'rxjs';
import './hello-observable';

describe('main test', () => {
    it('test 01', () => {
        Observable.of(1, 2, 3, 4, 5)
            .hello()
            .map(x => x)
            .subscribe(x => (console.log(x)));
    });
});