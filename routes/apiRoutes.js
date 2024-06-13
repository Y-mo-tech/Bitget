const express = require('express')
const verifyfun = require('../wrapper/wrapperFile.js')
const router = express.Router();
const path1 = require('../controllers/BitgetAPI.js')

router.use(express.json())

router.get('/walletBalance', verifyfun, (req, res)=>{
    let controllerName = req.controllerName
    console.log(controllerName)
    if(controllerName === 'path1'){
        path1.walletBalance(req, res)
    }
})

router.post('/placeOrder',  verifyfun, (req, res)=>{
    let controllerName = req.controllerName
    console.log(controllerName)
    if(controllerName === 'path1'){
        path1.placeOrder(req, res)
    }
})

router.post('/cancelOrder', verifyfun, (req, res)=>{
    let controllerName = req.controllerName
    console.log(controllerName)
    if(controllerName === 'path1'){
        path1.cancelOrder(req, res)
    }
})

router.get('/orderDetails', verifyfun, (req, res)=>{
    let controllerName = req.controllerName
    console.log(controllerName)
    if(controllerName === 'path1'){
        path1.getOrderInfo(req, res)
    }
})

router.get('/orderBookData', verifyfun, (req, res)=>{
    let controllerName = req.controllerName
    console.log(controllerName)
    if(controllerName === 'path1'){
        path1.OrderBookData(req, res)
    }
})

router.get('/tickerData', verifyfun, (req, res)=>{
    let controllerName = req.controllerName
    console.log(controllerName)
    if(controllerName === 'path1'){
        path1.TickerData(req, res)
    }
})

router.get('/candleStickData', verifyfun, (req, res)=>{
    let controllerName = req.controllerName
    console.log(controllerName)
    if(controllerName === 'path1'){
        path1.CandleStickData(req, res)
    }
})

module.exports = router