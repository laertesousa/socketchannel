const jwt = require ('jsonwebtoken')

const post = async (req, res) => {
    const { clientId, clientSecret } = req.body;

    const token = jwt.sign({ 'foo': 'bar' })
    console.log(token);
}


module.exports = {
    post
}