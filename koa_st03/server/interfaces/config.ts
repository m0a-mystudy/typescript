
export type ColumnSchema = string[]

export interface TableSchma {
	primaryKey: string;
	indexColumns: ColumnSchema;
	viewColumns: ColumnSchema;
}

export interface CrudConfig {
	targets: string[];
	tables: {[target: string]: string};
	schema: {[target: string]: TableSchma};
}
