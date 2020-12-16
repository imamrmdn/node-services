const express = require('express')
const app = express()

const port = 3300

app.get('/admin', (req, res, next) => {
    res.status(200).send('Hello Admin!')
})

app.get('/user', (req, res, next) => {
    res.status(200).send('Hello User!')
})

app.use((req, res, next) => {
    res.status(404).json({ error: 'not found' })
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})