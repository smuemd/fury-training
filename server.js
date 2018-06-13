const http = require('http')
const path = require('path')
const express = require('express')

// # SimpleServer
const router = express()
const server = http.createServer(router)

router.use(express.static(path.resolve(__dirname, '/public')))

server.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
  const addr = server.address()
  console.log('Server listening at ', addr.address + ':' + addr.port)
})
