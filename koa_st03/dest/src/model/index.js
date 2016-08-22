"use strict";
const Knex = require('knex');
const crudConfig = require('../config/crud');
const dbConfig = require('../config/database');
const Debug = require('debug');
let debug = Debug('mycrud');
let db = Knex(dbConfig);
function index(target, limit = 10, offset = 0) {
    debug(`in index target= ${target}, limit= ${limit}, offset= ${offset}`);
    let schema = crudConfig.schema[target];
    let selectColumns = schema.indexColumns;
    let table = crudConfig.tables[target];
    return new Promise(resolve => {
        resolve(db.from(table)
            .select(selectColumns)
            .limit(limit)
            .offset(offset));
    });
}
exports.index = index;
function view(target, id) {
    let table = crudConfig.tables[target];
    let selectColumns = crudConfig.schema[target].viewColumns;
    let pk = crudConfig.schema[target].primaryKey;
    return new Promise(resolve => {
        resolve(db.from(table)
            .select(selectColumns)
            .where(pk, id));
    });
}
exports.view = view;
//# sourceMappingURL=index.js.map