import React, { useEffect, useState } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

export default function Pylon() {
  const [latency, setLatency] = useState(null)
  useEffect(() => {
    client.onmessage = (message) => {
      setLatency(new Date().getTime() - message.data)
    }
  }, [])
  return (
    <div>
      <span>
        {latency}
      </span>
    </div>
  )
}
