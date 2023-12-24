import express from 'express'

import { contactRoute } from './routes/contacts.js'
import { mainRoute } from './routes/index.js'
import path from 'path'

const PORT = 1337

const app = express()

const currentDirectory = process.cwd()

// Add middleware to serve static files from the "public" directory
app.use('/css', express.static(path.join(currentDirectory, 'public', 'css')))

app.get('/', mainRoute)
app.get('/contacts', contactRoute)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
