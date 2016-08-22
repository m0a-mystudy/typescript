"use strict";
const Knex = require('knex');
let config = {
    client: 'mysql',
    connection: {
        user: 'root',
        password: 'root',
        database: 'employees'
    }
};
let knex = Knex(config);
describe('knex基本動作確認', () => {
    /*
    [ { emp_no: 10001,
            birth_date: 1953-08-31T15:00:00.000Z,
            first_name: 'Georgi',
            last_name: 'Facello',
            gender: 'M',
            hire_date: 1986-06-25T15:00:00.000Z } ]
    */
    it('基本操作の理解1', (done) => {
        let select_config = {
            table: 'employees',
        };
        knex.from(select_config.table).limit(1).then(function (rows) {
            console.log(rows);
            done();
        });
    });
});
//# sourceMappingURL=db_test.js.map