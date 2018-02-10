module.exports = {
  createVisitor ({ fullname, mobilenum, nricnum }) {
    console.log(`Add user ${fullname} with mobile number ${mobilenum} and NRIC number ${nricnum}`)
    return Promise.resolve()
  }
}
