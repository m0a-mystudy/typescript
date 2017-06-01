import { Record, List,is } from 'immutable';



interface AI {
	num: number;
}

const ARecord = Record(<AI>{
	num:0,
	num2:1,
	bool:true
})

class A extends ARecord implements AI {
	num: number;
	num2:number;
	bool: boolean;
}

//-------
interface HaveListI {
	num: number;
	str: string;
	contents:A[]
}

const HaveListRecord = Record(<HaveListI>{
	num: 0,
	str: "",
	contents:[]
});

class HaveList extends HaveListRecord implements HaveListI {
	num: number;
	str: string;
	contents:A[];
}
//---

it('HaveList test', () => {
	let haveList = new HaveList({num:12,str:'hello',contents:[{num:1,num2:2,bool:false},{num:2,num3:4,boo:true}]})
	haveList = <HaveList>haveList.setIn(['num'],13);
	haveList = <HaveList>haveList.setIn(['contents','0','num1'],13);
	let haveList2 = new HaveList({num:12,str:'hello'})
	// const result = is(haveList,haveList2)
	expect(haveList).toEqual(haveList2);
})
