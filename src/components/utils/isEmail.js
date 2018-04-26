function isEmail (email) {
  let patern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return patern.test(String(email).toLowerCase())
}

export default isEmail
