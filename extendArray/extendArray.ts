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
  
  export class Users  {
    list: Array<User|undefined>;
    constructor() {
        this.list = [];
    }
    public setUser(user: User | undefined) {
        let users = this.list;
        users.push(user);
        users = remove(users, undefined); 
        users = uniqBy(users,'id')
        users = orderBy(users, ['created_at'],['asc'])
        this.list = users;
    }
  }
