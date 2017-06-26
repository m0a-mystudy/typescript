import { Record, List, is } from 'immutable';



interface AI {
	num: number;
}

const ARecord = Record(<AI>{
	num: 0
})

class A extends ARecord implements AI {
	num: number;
}

interface BI {
	num: number;
	contents: List<A>
}

const BRecord = Record(<BI>{
	num: 0,
	contents: List<A>()
});

class B extends BRecord implements BI {
	num: number;
	contents: List<A>;
	constructor({num, contents}:{num:number, contents?:AI[]}) {
		if (contents)
		super({num, contents:List<A>(contents.map(a=>new A(a)))})
		else 
		super({num, contents:List<A>()})
	}
}


it('B test', () => {
	let b = new B({ num: 12, contents: [{ num: 1 }, { num: 2 }] })
	b = <B>b.updateIn(['contents',0], (num:A) => new A({num:42}))
	let b2 = new B({ num: 12, contents: [{ num: 42 }, { num: 2 }] })
	expect(b).toEqual(b2);
})
