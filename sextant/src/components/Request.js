import React, { useState, useEffect } from 'react'

export default function Request(props) {
  const url = props.address
  const [ipAddress, setIpAddress] = useState(null)

  const getIPAddress = async () => {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      }
    })
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip));
  }
  useEffect(() => {
    getIPAddress()
  }, [])
  return (
    <div>
      <p>IP display</p>
      <p>
        {ipAddress}
      </p>
    </div>
  )
}
