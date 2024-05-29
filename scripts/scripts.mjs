// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./database.mjs";

// Data Structure
// {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     address: {
//       street: string,
//       suite: string,
//       city: string,
//       zipcode: string,
//       geo: {
//         lat: string,
//         lng: string
//       }
//     },
//     phone: string,
//     website: string,
//     company: {
//       name: string,
//       catchPhrase: string,
//       bs: string
//     }
// }

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}

async function userProfile(id)
{
    let profile = {};

    const userDB = await dbCheck(id);
    console.log(userDB);
    const result = dbs.
    console.log(result);
    
    // console.log(`User DB: `)
    // console.log(userDB);

    // profile = await Promise.all([userDB])
    // profile['db'] = userDB;
    
    return profile;
}

function dbCheck(id)
{
    const returnedDB = central(id);
    // console.log(`ReturnedDB: `)
    // console.log(returnedDB);
  
    return returnedDB;
}

const profile = userProfile(1);
// console.log(`User Profile: `);
// console.log(profile);