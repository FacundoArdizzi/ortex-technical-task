import React, { useEffect, useState } from 'react'
import { Form, NavBar } from './components'
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
      console.log('data', data)
      const p = JSON.stringify(data.price).slice(0,4)
      setPrice(p)
      setTime(data.dt*1000)
    }
  }, [])
  return (
    <div className="App">
      <NavBar price={price} time={time} />
      <Form />
      <h1 className='footer'>
        <a target='_blank' href='https://www.linkedin.com/in/facundo-ardizzi/' rel="noreferrer" >By Facundo Ardizzi</a>
      </h1>
    </div>
  )
}

export default App
