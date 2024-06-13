const crypto = require('crypto')
const axios = require('axios')

async function OrderBookData(req, res){
    let token = req.body.token
    let baseToken = req.body.baseToken
    let arg = token + baseToken
    try{
        const response = await axios.get(`https://api.bitget.com/api/v2/spot/market/orderbook?symbol=${arg}&type=step0&limit=100`)
        return res.status(200).json({"message" : response.data})
    } catch(err){
        return res.status(500).json({"message" : err.message})
    }
    
}

async function TickerData(req, res){
    let token = req.body.token
    let baseToken = req.body.baseToken
    let arg = token + baseToken
    try{
        const response = await axios.get(`https://api.bitget.com/api/v2/spot/market/tickers?symbol=${arg}`)
        return res.status(200).json({"message" : response.data})
    } catch(err){
        
        return res.status(500).json({"message" : err.message})
    }
    
}

async function CandleStickData(req, res){
    let token = req.body.token
    let baseToken = req.body.baseToken
    let granularity = req.body.granularity  
    let arg = token + baseToken
    let endTime = Math.round(Date.now())
    let startTime = endTime - 1*60*1000
    endTime += '';
    startTime += ''; 
    try{

        const response = await axios.get(`https://api.bitget.com/api/v2/spot/market/candles?symbol=${arg}&granularity=${granularity}&startTime=${startTime}&endTime=${endTime}&limit=100`)
        return res.status(200).json({"message" : response.data}) 

    } catch(err){
        return res.status(500).json({"message" : err.message})
    }
    
}

module.exports = {
    OrderBookData,
    TickerData,
    CandleStickData
}
