import express from 'express'
import fetch from 'node-fetch'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    fetch('https://devmobile.int.sportingindex.com/api/neccton/accounts/A4074/authenticate', {
        method: 'POST'
    })
    .then(data => data.json())
    .then(data => res.send(data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})