const { getAuth, create } = require('./service')

const get = async (req, res) => { 
    const auth = await getAuth();
    res.json(auth);
  };

const post = async (req, res) => {

    const { appId, appKey } = req.body;

    try{
        const token = await create(appId, appKey);
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