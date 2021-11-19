const costumeAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')
class BadRequestError extends costumeAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = BadRequestError
  