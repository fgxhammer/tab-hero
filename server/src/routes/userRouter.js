/**
 * UserController
 */
const { register } = require('../controllers/AuthController')

module.exports = (app) => {

    /**
     * Create a new user in database
     * @returns the stored user in the db or error
     */
    app.post('/register', register)

}
