let wss = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let stockPriceElements = document.getElementById('stockprice');
let lastPrices= null;

wss.onmessage = (event) => {
let stockObject = JSON.parse(event.data);
let price = parseFloat(stockObject.p).toFixed(2);
//console.log(event.data);
stockPriceElements.innerText = price;
stockPriceElements.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red' ;
lastPrices= price;
};



