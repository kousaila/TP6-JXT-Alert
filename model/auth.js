const jwt = require("jsonwebtoken")
const fs = require("fs")
const secret = fs.readFileSync("jwtRS256.key")
const axios = require("axios")


const verifyacess = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject()
      } else {
        resolve(decoded)
      }
    })
  })
}

module.exports = { verifyacess }