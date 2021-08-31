const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map();

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

userRoles.has(u1); // true
userRoles.get(u1); // "User"
userRoles.has(u4); // false
userRoles.get(u4); // undefined

userRoles.size; // 3

for (let u of userRoles.keys())
    console.log(u.name);
/*
 * Cynthia
 * Jackson
 * Olive
 */
for (let r of userRoles.values())
    console.log(r);
/*
 * User
 * User
 * Admin
 */

for (let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);
/*
 * Cynthia: User
 * Jackson: User
 * Olive: Admin
 */