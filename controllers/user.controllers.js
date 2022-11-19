const db = require('../db')

class UserControllers {
    async craateUser(req, res) {
        if(req.body) {
            const {first_name, gender} = req.body
            const newPerson = await db.query('INSERT INTO person (first_name, gender) VALUES ($1, $2) RETURNING *', [first_name, gender])
            res.json(newPerson.rows[0])
        }
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const {id, frends, subscribers} = req.body

        const user = await db.query('UPDATE person set frends = $1, subscribers = $2 where id = $3 RETURNING *', [frends, subscribers, id])
        res.json(user.rows[0])
    }
}

module.exports = new UserControllers()