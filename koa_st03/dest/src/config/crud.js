"use strict";
let crudConfig;
crudConfig = {
    targets: ['emp'],
    tables: {
        'emp': 'employees',
    },
    schema: {
        'emp': {
            primaryKey: 'emp_no',
            indexColumns: [
                'emp_no',
                'birth_date',
                'first_name',
                'last_name',
                'gender',
                'hire_date'
            ],
            viewColumns: [
                'emp_no',
                'birth_date',
                'first_name',
                'last_name',
                'gender',
                'hire_date',
            ]
        }
    }
};
module.exports = crudConfig;
//# sourceMappingURL=crud.js.map