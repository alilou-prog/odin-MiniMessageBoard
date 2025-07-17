const {Router} = require('express')

const new_router = Router()

new_router.get('/', (req, res) => {
    res.render("new");
})

module.exports = new_router