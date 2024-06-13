const crypto = require('crypto')
const axios = require('axios');
const { response } = require('express');


function signature(payload, secretKey){
    return crypto.createHmac('sha256', secretKey).update(payload).digest('base64');
}

function configuration(config, requestPath, method, data){
    let timestamp = '' + Math.round(Date.now()) ;
    console.log(timestamp)
    let payload = timestamp + method + requestPath;
    if(data){
        payload += data
    }
    let sign  = signature(payload, config.apiSec);
    console.log('sign is : ',sign);
    let headers = {
        'ACCESS-KEY': config.apiKey,
        'ACCESS-SIGN': sign,
        'ACCESS-PASSPHRASE': config.passPh,
        'ACCESS-TIMESTAMP': timestamp,
        'locale': 'en-US',
        'Content-Type': 'application/json'
    }
    return headers
}

// async function walletBalance(req, res){
//     try{
//         let config = {
//             apiKey: "bg_adbbd6f968e3db199e0560aa239b4fca",
//             apiSec : "7bc8074d9eec325f615e00913ba33a246ca8f9375cdb2013dd981d98d3cdf95c",
//             passPh : "Yunus123456"
//         };
//         let baseurl = 'https://api.bitget.com';
//         let requestPath = '/api/v2/spot/account/assets'
//         let method = 'GET'
    
//         let headers = configuration(config, requestPath, method)
//         let url = baseurl + requestPath
//         let reqOptions = {
//             url, method, headers
//         }
//         let response = await axios(reqOptions)
//         console.log(response)
//         return res.status(200).json({"message": response.data})
//     } catch(err){
//         console.log("error======>", err)
//         return res.status(err.response.status || 500).json({"message" : err.data})

//     }     
//     //console.log(response)
// }

function walletBalance(req, res){
    let config = {
        apiKey: "bg_adbbd6f968e3db199e0560aa239b4fca",
        apiSec : "7bc8074d9eec325f615e00913ba33a246ca8f9375cdb2013dd981d98d3cdf95c",
        passPh : "Yunus123456"
    };
    let baseurl = 'https://api.bitget.com';
    let requestPath = '/api/v2/spot/account/assets'
    let method = 'GET'

    let headers = configuration(config, requestPath, method)
    let url = baseurl + requestPath
    let reqOptions = {
        url, method, headers
    }
    axios(reqOptions)
    .then(response => {
        console.log("6790");
        return res.status(200).json({ "message": response.data });
    })
    .catch(error => {
        console.error(error);
        return res.status(error.response.status || 500).json({ "message": error.message });
    }); 
    console.log(response)
    
}

// async function placeOrder(req, res){

//     try{
//         let config = {
//             apiKey: "bg_adbbd6f968e3db199e0560aa239b4fca",
//             apiSec : "7bc8074d9eec325f615e00913ba33a246ca8f9375cdb2013dd981d98d3cdf95c",
//             passPh : "Yunus123456"
//         };
//         let baseurl = 'https://api.bitget.com';
//         let requestPath = '/api/v2/spot/trade/place-order'
//         let method = "POST"
    
//         let token = req.body.token
//         let baseToken = req.body.baseToken
//         let side = req.body.side
//         let ordertype = req.body.ordertype
//         let size = req.body.size
//         let price = req.body.price
//         let clientOid = req.body.clientOid

//         if(!token || !baseToken || !side || !ordertype || !size || !price || !clientOid){
//             return res.status(400).json({"message" : "Missing params"})
//         }

//         let arg = token + baseToken
//         let data = {
//             "symbol": arg,
//             "side": side,
//             "orderType": ordertype,
//             "force":"gtc",
//             "price": price,
//             "size":size,
//             "clientOid" : clientOid
//         }
//         let Data = JSON.stringify(data)
//         let headers = configuration(config, requestPath, method, Data)
//         let url = baseurl + requestPath
        
//         let reqOptions = {
//             url, method, data, headers
//         }

//         //console.log("reqqqOptions=====>", reqOptions)
//         let response = await axios(reqOptions)
//         console.log("response=========>", response)
    
//         return res.status(200).json({"message": response.data})

//     }
//     catch(err){
//         console.log("error status ===>", err)
//         return res.status(err.response.status || 500).json(err.message)

//     }

// }

function placeOrder(req, res){

    let config = {
        apiKey: "bg_adbbd6f968e3db199e0560aa239b4fca",
        apiSec : "7bc8074d9eec325f615e00913ba33a246ca8f9375cdb2013dd981d98d3cdf95c",
        passPh : "Yunus123456"
    };
    let baseurl = 'https://api.bitget.com';
    let requestPath = '/api/v2/spot/trade/place-order'
    let method = "POST"

    let token = req.body.token
    let baseToken = req.body.baseToken
    let side = req.body.side
    let ordertype = req.body.ordertype
    let size = req.body.size
    let price = req.body.price
    let clientOid = req.body.clientOid
    if(!token || !baseToken || !side || !ordertype || !size || !price || !clientOid){
        return res.status(400).json({"message" : "Missing params"})
    }

    let arg = token + baseToken
    let data = {
        "symbol": arg,
        "side": side,
        "orderType": ordertype,
        "force":"gtc",
        "price": price,
        "size":size,
        "clientOid" : clientOid
    }
    let Data = JSON.stringify(data)
    let headers = configuration(config, requestPath, method, Data)
    let url = baseurl + requestPath
    
    let reqOptions = {
        url, method, data, headers
    }

        //console.log("reqqqOptions=====>", reqOptions)
    axios(reqOptions)
    .then(response => {
        console.log("6790");
        return res.status(200).json({ "message": response.data });
    })
    .catch(error => {
        console.error(error);
        return res.status(error.response.status || 500).json({ "message": error.message });
    }); 

}

// async function cancelOrder(req, res){
//     try{
//         let config = {
//             apiKey: "bg_adbbd6f968e3db199e0560aa239b4fca",
//             apiSec : "7bc8074d9eec325f615e00913ba33a246ca8f9375cdb2013dd981d98d3cdf95c",
//             passPh : "Yunus123456"
//         };
//         let baseurl = 'https://api.bitget.com';
//         let requestPath = '/api/v2/spot/trade/cancel-order'
//         let method = 'POST'
    
//         let token = req.body.token
//         let baseToken = req.body.baseToken
//         let orderId = req.body.orderId
//         let arg = token + baseToken

//         if(!token || !baseToken || !orderId){
//             return res.status(400).json({"message" : "Missing params"})
//         }
//         let data = {
//             "symbol": arg
//         }  // "orderId":"${orderId}"
//         let Data = JSON.stringify(data)
    
//         let headers = configuration(config, requestPath, method, Data)
    
//         let url = baseurl + requestPath
        
//         let reqOptions = {
//             url, method, data, headers
//         }
//         let response = await axios(reqOptions)
//         //console.log(response.data)
//         //return response.data
//         return res.status(200).json({"message": response.data})
//     }
//     catch(err){
//         console.log("error======>", err)
//         return res.status(err.response.status || 500).json({"message" : err.message})

//     }
// }

function cancelOrder(req, res){
        let config = {
            apiKey: "bg_adbbd6f968e3db199e0560aa239b4fca",
            apiSec : "7bc8074d9eec325f615e00913ba33a246ca8f9375cdb2013dd981d98d3cdf95c",
            passPh : "Yunus123456"
        };
        let baseurl = 'https://api.bitget.com';
        let requestPath = '/api/v2/spot/trade/cancel-order'
        let method = 'POST'
    
        let token = req.body.token
        let baseToken = req.body.baseToken
        let orderId = req.body.orderId
        let arg = token + baseToken

        if(!token || !baseToken || !orderId){
            return res.status(400).json({"message" : "Missing params"})
        }
        let data = {
            "symbol": arg
        }  // "orderId":"${orderId}"
        let Data = JSON.stringify(data)
    
        let headers = configuration(config, requestPath, method, Data)
    
        let url = baseurl + requestPath
        
        let reqOptions = {
            url, method, data, headers
        }
        axios(reqOptions)
        .then(response => {
            console.log("6790");
            return res.status(200).json({ "message": response.data });
        })
        .catch(error => {
            console.error(error);
            return res.status(error.response.status || 500).json({ "message": error.message });
        }); 
        
}

// async function getOrderInfo(req, res){
//     try{
//         let config = {
//             apiKey: "bg_adbbd6f968e3db199e0560aa239b4fca",
//             apiSec : "7bc8074d9eec325f615e00913ba33a246ca8f9375cdb2013dd981d98d3cdf95c",
//             passPh : "Yunus123456"
//         };
//         let orderId = req.body 

//         if(!orderId){
//             return res.status(400).json({"message" : "Missing params"})
//         }
//         let baseurl = 'https://api.bitget.com';
//         let requestPath = `/api/v2/spot/trade/orderInfo?orderId=${orderId}`
//         let method = "GET"
    
//         let headers = configuration(config, requestPath, method)
        
//         let url = baseurl + requestPath
        
//         let reqOptions = {
//             url, method, headers
//         }
//         let response = await axios(reqOptions)
//         return res.status(200).json({"message" : response.data})
        
//     }catch(err){   
//         console.log("error======>", err)
//         return res.status(500).json({"message" : err})
//     }
    
// }

function getOrderInfo(req, res){
    
    let config = {
        apiKey: "bg_adbbd6f968e3db199e0560aa239b4fca",
        apiSec : "7bc8074d9eec325f615e00913ba33a246ca8f9375cdb2013dd981d98d3cdf95c",
        passPh : "Yunus123456"
    };
    let orderId = req.body 
    if(!orderId){
        return res.status(400).json({"message" : "Missing params"})
    }
    let baseurl = 'https://api.bitget.com';
    let requestPath = `/api/v2/spot/trade/orderInfo?orderId=${orderId}`
    let method = "GET"

    let headers = configuration(config, requestPath, method)
    
    let url = baseurl + requestPath
    
    let reqOptions = {
        url, method, headers
    }
    axios(reqOptions)
    .then(response => {
        console.log("6790");
        return res.status(200).json({ "message": response.data });
    })
    .catch(error => {
        console.error(error);
        return res.status(error.response.status || 500).json({ "message": error.message });
    });  
        //return res.status(200).json({"message" : response.data})
        //console.log("error======>", err)
        //return res.status(500).json({"message" : err})
    
    
}

// async function OrderBookData(req, res){
//     let token = req.body.token
//     let baseToken = req.body.baseToken
//     let arg = token + baseToken
//     try{
//         if(!token || !baseToken ){
//             return res.status(400).json({"message" : "Missing params"})
//         }
//         const response = await axios.get(`https://api.bitget.com/api/v2/spot/market/orderbook?symbol=${arg}&type=step0&limit=100`)
//         return res.status(200).json({"message" : response.data})
//     } catch(err){
//         return res.status(500).json({"message" : err.message})
//     }
    
// }

function OrderBookData(req, res){
    let token = req.body.token
    let baseToken = req.body.baseToken
    let arg = token + baseToken
    if(!token || !baseToken ){
        return res.status(400).json({"message" : "Missing params"})
    }
    console.log("123456")
    let url = `https://api.bitget.com/api/v2/spot/market/orderbook?symbol=${arg}&type=step0&limit=100`
    axios.get(url)
    .then(response => {
        console.log("6790");
        return res.status(200).json({ "message": response.data });
    })
    .catch(error => {
        console.error(error);
        return res.status(500).json({ "message": error.message });
    });   
}

// async function TickerData(req, res){
//     let token = req.body.token
//     let baseToken = req.body.baseToken
//     let arg = token + baseToken
//     try{
//         if(!token || !baseToken){
//             return res.status(400).json({"message" : "Missing params"})
//         }
//         const response = await axios.get(`https://api.bitget.com/api/v2/spot/market/tickers?symbol=${arg}`)
//         return res.status(200).json({"message" : response.data})
//     } catch(err){
//         return res.status(500).json({"message" : err.message})
//     }
    
// }

function TickerData(req, res){
    let token = req.body.token
    let baseToken = req.body.baseToken
    let arg = token + baseToken

    if(!token || !baseToken){
        return res.status(400).json({"message" : "Missing params"})
    }
    axios.get(`https://api.bitget.com/api/v2/spot/market/tickers?symbol=${arg}`)
    .then(response => {
        console.log("6790");
        return res.status(200).json({ "message": response.data });
    })
    .catch(error => {
        console.error(error);
        return res.status(500).json({ "message": error.message });
    });
      
}

// async function CandleStickData(req, res){
//     let token = req.body.token
//     let baseToken = req.body.baseToken
//     let granularity = req.body.granularity  
//     let arg = token + baseToken
//     let endTime = Math.round(Date.now())
//     let startTime = endTime - 1*60*1000
//     endTime += '';
//     startTime += ''; 
//     try{
//         if(!token || !baseToken || !granularity){
//             return res.status(400).json({"message" : "Missing params"})
//         }
//         const response = await axios.get(`https://api.bitget.com/api/v2/spot/market/candles?symbol=${arg}&granularity=${granularity}&startTime=${startTime}&endTime=${endTime}&limit=100`)
//         return res.status(200).json({"message" : response.data}) 

//     } catch(err){
//         return res.status(500).json({"message" : err.message})
//     }
    
// }

function CandleStickData(req, res){
    let token = req.body.token
    let baseToken = req.body.baseToken
    let granularity = req.body.granularity  
    let arg = token + baseToken
    let endTime = Math.round(Date.now())
    let startTime = endTime - 1*60*1000
    endTime += '';
    startTime += ''; 
    
    if(!token || !baseToken || !granularity){
        return res.status(400).json({"message" : "Missing params"})
    }
    axios.get(`https://api.bitget.com/api/v2/spot/market/candles?symbol=${arg}&granularity=${granularity}&startTime=${startTime}&endTime=${endTime}&limit=100`)
    .then(response => {
        console.log("6790");
        return res.status(200).json({ "message": response.data });
    })
    .catch(error => {
        console.error(error);
        return res.status(500).json({ "message": error.message });
    });   
    
}

module.exports = {
    walletBalance,
    placeOrder,
    cancelOrder,
    getOrderInfo,
    OrderBookData,
    TickerData,
    CandleStickData
}
