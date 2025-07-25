const { Router } = require('express')

const new_router = Router()

new_router.get('/', (req, res) => {
    res.render("form");
})

new_router.post('/', (req, res) => {
    const data = req.body;
    const messages = req.app.get("messages")
    messages.push({ id: messages.at(-1).id + 1, text: req.body["msg-text"], user: req.body["msg-user"], added: new Date() })
    res.redirect("/")
})

module.exports = new_router