import * as ts from 'typescript'

let source = `
export interface Sample {
    num: number;
    str: string;
	type: 'Empty';
    val: 1;
}

export interface Sample2 {
    val: 1|2;
}
`;

let sourceFile = ts.createSourceFile('sample.ts', source, ts.ScriptTarget.ES2015, /*setParentNodes */ true);


export function parse(sourceFile: ts.SourceFile) {
    parseInterface(sourceFile);

    function parseInterface(node: ts.Node) {
        switch (node.kind) {
            case ts.SyntaxKind.InterfaceDeclaration:
                console.log('--------');
                console.log(node.getText(sourceFile));
                let interfaceDeclaration = <ts.InterfaceDeclaration>node;
                console.log(`name=${interfaceDeclaration.name.text}`)
                let members = interfaceDeclaration.members
                members.forEach(member => {
                    // console.log(`member = > ${member.getText(sourceFile)}`);
                    member.forEachChild(parseMembers);
                });

                break;
        }

        ts.forEachChild(node, parseInterface);
    }

    function parseMembers(node: ts.Node) {
        switch (node.kind) {
            case ts.SyntaxKind.Identifier:
                let identifer = <ts.Identifier>node;
                console.log(`identifer =${identifer.text}`);
                identifer.forEachChild(parseMembers);
                break;
            case ts.SyntaxKind.NumberKeyword:
                console.log('is Number');
                node.forEachChild(parseMembers);
                break;
            case ts.SyntaxKind.StringKeyword:
                console.log('is String');
                node.forEachChild(parseMembers);
                break;
            case ts.SyntaxKind.UnionType:
                console.log('is union type')
                node.forEachChild(parseMembers);
                break;
            case ts.SyntaxKind.LiteralType:
                console.log('is Literal')
                node.forEachChild(parseMembers);
                break;
            case ts.SyntaxKind.NumericLiteral:
                let literal = <ts.NumericLiteral>node;
                console.log(`NumericLiteral = ${literal.text}`);
                break;
            case ts.SyntaxKind.StringLiteral:
                {
                    let literal = <ts.StringLiteral>node;
                    console.log(`StringLiteral = ${literal.text}`);
                    break;
                }
            
            default:
                console.log(node.kind.toString());
                node.forEachChild(parseMembers);

        }
    }
}

parse(sourceFile);
