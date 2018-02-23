import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
        {
        username:"abhishek",
        password:"asbjgd",
        email:"abcd@gmail.com",
        mobileno:"8985655664"
},
 {
        username:"aman",
        password:"asbjdasgd",
        email:"abc@gmail.com",
        mobileno:"8985655664"
},
 {
        username:"rohan",
        password:"asb2jgd",
        email:"abcd@gmail.com",
        mobileno:"8985655664"
},
 {
        username:"nitesh",
        password:"password",
        email:"acd@gmail.com",
        mobileno:"8985655664"
},
 {
        username:"ron",
        password:"opening",
        email:"abcd@gmail.com",
        mobileno:"8985655664"
}

    ];
     return {users};
  }
}