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


const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
};

async function userProfile(id)
{
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };

    let profile = {};

    const userDB = await Promise.resolve(dbCheck(id));
    console.log(userDB);
    // const result = await Promise.resolve(dbs[userDB](id));
    // console.log(result);

    const userInfo = await Promise.resolve(getUserInfo(userDB, id));
    console.log(userInfo);
    
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

function getUserInfo(database, id)
{
    const returnedInfo = dbs[database](id);
    console.log(`Returned User Info: `);
    console.log(returnedInfo);

    return returnedInfo;
}

const profile = userProfile(1);
// console.log(`User Profile: `);
// console.log(profile);