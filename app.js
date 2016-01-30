'use strict'

const http = require('http')
const url  = require('url')
const port = process.env.PORT || 3000
const hostname = process.env.IP || 'localhost'
const timestamp = require('./timestamp')

http.createServer((req,res) => {
  
  if (req.method === 'GET') {
        
    let path = url.parse(req.url)
      .pathname
      .slice(1)
      .replace(/%20/g, ' ')
            
    res.writeHead(200, { 'Content-Type': 'application/json' })       
    res.end(path && JSON.stringify(timestamp(path)))
  }
}).listen(port, hostname)