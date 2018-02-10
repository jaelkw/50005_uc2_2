// module.exports = {
//   createVisitor ({ fullname, mobilenum, nricnum }) {
//     console.log(`Add user ${fullname} with mobile number ${mobilenum} and NRIC number ${nricnum}`)
//     return Promise.resolve()
//   }
// }

const knex = require('knex')(require('./knexfile'))
module.exports = {
    createVisitor ({ fullname, mobilenum, nricnum }) {
        console.log(`Add user ${fullname} with mobile number ${mobilenum} and NRIC number ${nricnum}`)
        return knex('visitor').insert({
            fullname,
            mobilenum,
            nricnum
    })
  }
}
