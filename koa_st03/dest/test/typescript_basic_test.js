"use strict";
const assert = require('power-assert');
describe('TypeScript仕様チェック', () => {
    it('仕様確認1', (done) => {
        let tables = [
            'a',
            'b',
            'c'
        ];
        let select_columns = {
            'a': ['a1', 'a2'],
            'b': ['b1', 'b2'],
            'c': ['c1', 'c2']
        };
        for (let table of tables) {
        }
        done();
    });
    it('宣言確認1', done => {
        const str = 'is const.';
        let num;
        let bool;
        let func;
        let obj;
        // str = 1;
        assert.equal(str, 'is const.');
        done();
    });
    it('class宣言', done => {
        class Base {
            constructor(boolA, boolB, boolC, boolD) {
                this.boolB = boolB;
                this.boolC = boolC;
                this.boolD = boolD;
                this.strA = 'string';
            }
            // method
            hello(word) {
                return `Hello, ${word}`;
            }
            get dateA() {
                return this._date;
            }
            set dateA(value) {
                this._date = value;
            }
        }
        const obj = new Base(true, false, true, false);
        obj.numA;
        obj.strA;
        obj.numB;
        // obj.numC;
        // obj.numD;
        assert.equal(obj.hello('TypeScript'), 'Hello, TypeScript');
        obj.dateA = new Date();
        obj.dateA;
        done();
    });
});
//# sourceMappingURL=typescript_basic_test.js.map