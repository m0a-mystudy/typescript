export type TaiyakuNode = TaiyakuElement | TaiyakuText | Empty;
export interface NodeBackup {
	parent: Node | null;
	children: Node[];
}


// json化した時に排除するデータ。逆にjsonから戻す際に生成可能であること
export interface NodeCache {
	pointer?: Node;
	parent?: TaiyakuElement;
	backup?: NodeBackup;
}


export interface TaiyakuElement {
	type: 'Element';
	tagId?: number;
	childNodes: TaiyakuNode[];
	cache?: NodeCache;
}

export interface TaiyakuText {
	type: 'Text';
	value: string;
	cache?: NodeCache;
}

export interface Empty {
	type: 'Empty';
}


export interface TransPair {
	hash: string; // 翻訳ハッシュ
	dontTranslate: boolean; //翻訳しない
	prevHash?: string; // 前後のつながりの記録
	nextHash?: string;
	baseTranslation: TaiyakuNode;
	translation?: TaiyakuNode;
	separeteTypeId: string; // 分割タイプ
	
}

export interface Content {
	id?: string;
	mine: boolean; //自分のものかどうかの判定
	url: string;
	tags?: string[];
	pairs: TransPair[];
	created: string;
	modified: string;
}


/** 
 * Documentation for C 
 */
class C { 
    /** 
     * constructor documentation
     * @param a my parameter documentation
     * @param b another parameter documentation
     */
    constructor(a: string, b: C) { }
}



if (parseInt('12')  == 12 ) {
	console.log('k')
}