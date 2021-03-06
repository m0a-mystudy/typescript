import * as ts from 'typescript';


function compile(fileNames: string[], options: ts.CompilerOptions): void {
	let program = ts.createProgram(fileNames, options);
	let emitResult = program.emit();
	let Alldiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
	Alldiagnostics.forEach(diagnostic => {
		let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
		let message = ts.flattenDiagnosticMessageText(diagnostic.messageText,"\n");
		console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}):${message}`);
		
	});
	let exitCode = emitResult.emitSkipped ? 1: 0;

	console.log(`Process exiting with code '${exitCode}'`);
	process.exit(exitCode)
}


compile(process.argv.slice(2),{
	noEmitOnError:true,noImplicitAny: true,
	target: ts.ScriptTarget.ES5,module: ts.ModuleKind.CommonJS
});