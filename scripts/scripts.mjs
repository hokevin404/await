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

const startTime = performance.now();

async function userProfile(id)
{
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };

    let profile = {};

    try {
        profile['id'] = id;
        const returnedDB = await central(id);
        // console.log(returnedDB);
        const returnedInfo = await dbs[returnedDB](id);
        // console.log(returnedInfo);
        const returnedPII = await vault(id);
        // console.log(returnedPII);
        // profile = await Promise.all([returnedInfo, returnedPII]);
        profile = Object.assign(profile, returnedPII, returnedInfo);
        console.log(profile);
        return profile;
    } catch (error) {
        console.error(`ERROR: ${error}`);
    }


    // console.log(profile);


    // const userDB = await Promise.resolve(dbCheck(id));
    // console.log(userDB);

    // const userInfo = getUserInfo(userDB, id);
    // // console.log(userInfo);
    // // profile = Object.assign(profile, userInfo);

    // const userPII =getUserPII(id);
    // // // console.log(userPII);
    // // profile = Object.assign(profile, userPII);
    
    // profile = await Promise.all([userInfo, userPII]);
    // console.log(profile);

    // console.log(`User DB: `)
    // console.log(userDB);

    // profile = await Promise.all([userDB])
    // profile['db'] = userDB;
    
    // console.log(`User Profile: `);
    // console.log(profile);

    // return profile;
}

const endTime = performance.now();

// function dbCheck(id)
// {
//     const returnedDB = central(id);
//     // console.log(`ReturnedDB: `)
//     // console.log(returnedDB);
  
//     return returnedDB;
// }

// function getUserInfo(database, id)
// {
//     const returnedInfo = dbs[database](id);
//     // console.log(`Returned User Info: `);
//     // console.log(returnedInfo);

//     return returnedInfo;
// }

// function getUserPII(id)
// {
//     const returnedPII = vault(id);
//     // console.log(`Returned User PII: `);
//     // console.log(returnedPII);

//     return returnedPII;
// }

const result = userProfile(1);
console.log(result);

const elapsedMs = (endTime - startTime) * 1000;
console.log(elapsedMs);