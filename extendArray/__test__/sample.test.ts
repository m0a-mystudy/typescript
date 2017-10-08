import {User, Users} from '../extendArray';

it('Users', () => {
    let users = new Users();
    // users.setUser(new User(1));
    users.setUser(new User('1', new Date('2001-10-13')));
    users.setUser(new User('1', new Date()));
    users.setUser(new User('1', new Date()));
    users.setUser(undefined);
    users.setUser(new User('15', new Date('2011-10-13')));
    users.setUser(new User('7', new Date('2011-10-12')));
    users.setUser(new User('10', new Date('2011-10-11')));
    console.log(users);
    
})