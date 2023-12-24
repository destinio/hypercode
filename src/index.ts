import express from 'express'

import { contactRoute } from './routes/contacts.js'
import { mainRoute } from './routes/index.js'

const PORT = 1337

const app = express()

app.get('/', mainRoute)
app.get('/contacts', contactRoute)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
