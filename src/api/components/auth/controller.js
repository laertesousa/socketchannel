const { getAuth, create } = require('./service')

const get = async (req, res) => { 
    const auth = await getAuth();
    res.json(auth);
  };

const post = async (req, res) => {
    const { appId, token } = req.body;

    try{
        //const token = jwt.sign({ clientId: clientId }, clientSecret)
        const event = await create(appId, token);
        res.json(token)
    } catch (err){
        console.error(err);
        res.status(500).json(); 
    };
    
}


module.exports = {
    get,
    post
}