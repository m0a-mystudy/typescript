
export interface CrudConfig {
	tables: TableConfig[];
	list: ListConfig;
	show: ShowConfig;
}

export interface TableConfig {
	targetName: string; // urlの一部として利用
	tableName: string;
}


// index
export interface ListConfig {
	[targetName: string]: string[];
}

// view
export interface ShowConfig {
	[targetName: string]: string[];
}
