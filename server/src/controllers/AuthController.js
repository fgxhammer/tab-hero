const { UserSchema } = require('../db')

/**
 * Creates a new user in the database
 * @param req request
 * @param res response
 * @returns the created user or error
 */
const register = async (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        const userExists = await UserSchema.findOne({ email: newUser.email })
        // Check if email exists in db 
        if (userExists) {
            res.status(400).send({
                error: 'Email already exists!'
            })
            return
        }
        const storedUser = await UserSchema.create(newUser)
        res.status(201).send(storedUser.toJSON())

    } catch (err) {
        res.status(500).send({
            error: 'An error occured!'
        })
    }
}

module.exports = {
    register,
}