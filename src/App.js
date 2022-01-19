import React, { useEffect, useState } from 'react'
import { Footer, Form, NavBar } from './components'
var W3CWebSocket = require('websocket').w3cwebsocket;

const client = new W3CWebSocket('wss://stream.tradingeconomics.com/?client=guest:guest', 'echo-protocol');
client.onopen = () => {
  console.log('WebSocket Client Connected');

  const sendMessage = () => {
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify({"topic": "subscribe", "to": "EURUSD:CUR"}))
    }
  }

  sendMessage()
}



const App = () => {
  const [price, setPrice] = useState()
  const [time, setTime] = useState()

  useEffect(() => {
    client.onmessage = (e) => {
      const data = JSON.parse(e.data)
      const p = JSON.stringify(data.price).slice(0,4)
      setPrice(p)
      setTime(data.dt*1000)
    }
  }, [])

  return (
    <div className="App">
      <NavBar price={price} time={time} />
      <Form />
      <Footer />
    </div>
  )
}

export default App
