import express from 'express'
import morgan from 'morgan'
import path from 'path'

const app = express()
const port = 4040

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello world! tsc-watch some more changes')
})

app.listen(port, () => {
  console.debug(`server started at localhost:${port}`)
})
