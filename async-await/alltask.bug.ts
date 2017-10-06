export class AsyncArray<T> extends Array<T> {
    async asyncFilter(compare: (value: T) => Promise<boolean>) {
      const results = await Promise.all(this.map(v => compare(v)));
      return <AsyncArray<T>>this.filter((_, i) => results[i]);
    }
  
    async asyncMap<U>(convert: (value: T) => Promise<U>) {
      return <Array<U>> await Promise.all(this.map(convert));
    }
  }
  
  async function sleep(time: number) {
    return new Promise<void>(resolve => {
      setTimeout(() => (resolve()), time);
    });
  }
  
  
  async function task1(): Promise<number[]> {
    await sleep(1000);
    console.log(`task1 end`);
    return [0,1,2,3,4,5];
  }
  
  async function task2() {
    await sleep(3000)
    console.log(`task2 end`);
  }
  
  async function task3(num:number) {
    await sleep(num * 1000);
    console.log(`task3(${num}) end`);
  }
  
  async function allTask() {
    let results =  await task1();
    await task2();
    results.map(async num => task3(num));
  }
  
  allTask().then(() => console.log('allTask end'));
  