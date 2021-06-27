let wsss = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let stockPriceElementss = document.getElementById('stockprice');
let lastPricess= null;

wsss.onmessage = (event) => {
let stockObject = JSON.parse(event.data);
let price = parseFloat(stockObject.p).toFixed(2);
//console.log(event.data);
stockPriceElementss.innerText = price;
stockPriceElementss.style.color = !lastPrices || lastPrices === price ? 'black' : price > lastPrice ? 'green' : 'red' ;
lastPricess= price;
};



