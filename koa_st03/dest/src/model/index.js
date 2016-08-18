"use strict";
function crud(config) {
    let functions;
    for (let table of config.tables) {
        functions[table.targetName] = () => {
            return new Promise((resolve, reject) => {
                resolve(table.tableName);
            });
        };
    }
    ;
    return functions;
}
exports.crud = crud;
;
//# sourceMappingURL=index.js.map