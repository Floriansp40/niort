/*** Import des modules */
const express = require('express')
const cors = require('cors')

/*** PARAM API */
const app = express()

app.use(cors())
app.use(express.json())

/*** ROUTAGE PRINCIPAL */
app.get('/', (req, res) => res.send(`Good job welcome to "Tant pis" spirit - parce que pourquoi pas`))

app.post('/user', (req, res) => res.status(201).send(`User added`))

app.all('*', (req, res) => res.status(501).send(`What the hell are you doing ????`))

/*** START API */
const server = app.listen(process.env.SERVER_PORT, () => {
    console.log(`This server is running on port ${process.env.SERVER_PORT}`)
})

module.exports = server