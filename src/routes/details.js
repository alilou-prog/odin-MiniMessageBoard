const {Router} = require("express")
const details_router = Router()

details_router.get('/:msg_id', (req, res)=> {
    const  {msg_id} = req.params;
    const msg = req.app.get("messages").find((msg) => {
        return msg.id === parseInt(msg_id);
    })
    res.render("details", {message: msg});
})
module.exports = details_router