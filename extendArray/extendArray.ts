import {
    uniqBy,
    remove,
    orderBy,
    find,
    findIndex,
  } from 'lodash';


  export class User extends Object {
    constructor(private id: string, private created_at: Date | undefined) {
        super();
        if (created_at == undefined) {
            this.created_at = new Date();
        }
    }
  }
  
  export class Users extends Array<User|undefined> {
    constructor() {
        super()
    }
    public setUser(user: User | undefined) {
        let users = <Array<User|undefined>> this;
        users.push(user);
        users = remove(users, undefined); 
        users = uniqBy(users,'id')
        users = orderBy(users, ['created_at'],['asc'])
        
        for(let a of <Array<User|undefined>> this) {
            console.log(a)
        }
        // this.list = users;
    }
  }
