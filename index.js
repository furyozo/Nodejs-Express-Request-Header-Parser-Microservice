const express = require('express')
const app = express()

/**
 * default route returns user IP, language and OS
 */
app.get('/', (req, res) => {
  var ip = req.ip
  var lang = req.headers["accept-language"].split(",")[0]
  var sw = req.headers['user-agent'].split(")")[0].split("(")[1]
  res.send({
    ipaddress: ip,
    language: lang,
    software: sw
  })
})

/**
 * all other routes get redirected to default route
 */
app.get('*', (req, res) => res.redirect('/'))

app.listen(3000, () => console.log('Request header parser microservice app listening on port 3000!'))
