//const router = express.Router();
//const path1 = require('../controllers/privateAPI.js')

function verifyfun(req, res, next){
    let exchange = req.body.exchange
    console.log("verify fun ke andr")
    if(exchange === "Bitget"){
        req.controllerName = "path1"
    }
    console.log("verify fun ke andr 2222")
    next();
}

module.exports = verifyfun