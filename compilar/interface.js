"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
let source = `
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
`;
let sourceFile = ts.createSourceFile('sample.ts', source, ts.ScriptTarget.ES2015, /*setParentNodes */ true);
// import {readFileSync} from "fs";
// import * as ts from "typescript";
function delint(sourceFile) {
    delintNode(sourceFile);
    function delintNode(node) {
        switch (node.kind) {
            case ts.SyntaxKind.InterfaceDeclaration:
                console.log('--------');
                console.log(node.getText(sourceFile));
                let interfaceDeclaration = node;
                let members = interfaceDeclaration.members;
                members.forEach(member => {
                    console.log(`member = > ${member.getText(sourceFile)}`);
                });
                break;
            case ts.SyntaxKind.ForStatement:
            case ts.SyntaxKind.ForInStatement:
            case ts.SyntaxKind.WhileStatement:
            case ts.SyntaxKind.DoStatement:
                if (node.statement.kind !== ts.SyntaxKind.Block) {
                    report(node, "A looping statement's contents should be wrapped in a block body.");
                }
                break;
            case ts.SyntaxKind.IfStatement:
                let ifStatement = node;
                if (ifStatement.thenStatement.kind !== ts.SyntaxKind.Block) {
                    report(ifStatement.thenStatement, "An if statement's contents should be wrapped in a block body.");
                }
                if (ifStatement.elseStatement &&
                    ifStatement.elseStatement.kind !== ts.SyntaxKind.Block &&
                    ifStatement.elseStatement.kind !== ts.SyntaxKind.IfStatement) {
                    report(ifStatement.elseStatement, "An else statement's contents should be wrapped in a block body.");
                }
                break;
            case ts.SyntaxKind.BinaryExpression:
                let op = node.operatorToken.kind;
                if (op === ts.SyntaxKind.EqualsEqualsToken || op == ts.SyntaxKind.ExclamationEqualsToken) {
                    report(node, "Use '===' and '!=='.");
                }
                break;
        }
        ts.forEachChild(node, delintNode);
    }
    function report(node, message) {
        let { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
        console.log(`${sourceFile.fileName} (${line + 1},${character + 1}): ${message}`);
    }
}
exports.delint = delint;
// const fileNames = process.argv.slice(2);
// fileNames.forEach(fileName => {
//     // Parse a file
//     let sourceFile = ts.createSourceFile(fileName, readFileSync(fileName).toString(), ts.ScriptTarget.ES6, /*setParentNodes */ true);
// delint it
delint(sourceFile);
