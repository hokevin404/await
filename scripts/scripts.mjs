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
}

const endTime = performance.now();

userProfile(1);
userProfile(11);
userProfile("1");

const elapsedMs = (endTime - startTime) * 1000;
console.log(elapsedMs);