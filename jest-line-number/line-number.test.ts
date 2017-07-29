it('line number test', () => {
    describe('test', () => {
        fail(new SyntaxError('test error line:3'));
    });
})


it('line number test2', () => {
    describe('test', () => {
        fail(new SyntaxError('test error line:10'));
    });
})


it('line number test4', () => {
    describe('test', () => {
        console.log('hello line:17')
    });
})
