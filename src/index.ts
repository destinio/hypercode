import express from 'express'

const app = express()

interface Contact {
  name: string
  phone: string
}

const contacts = [
  { name: 'alice', phone: '111-1111-1111' },
  { name: 'bob', phone: '222-2222-2222' },
  { name: 'charlie', phone: '333-3333-3333' },
] as Contact[]

app.get('/', (req, res) => {
  res.redirect('/contacts')
})

const mainTemplate = ({ title, body }: { title: string; body: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
      <form action="/contacts" method="GET">
        <input type="text" name="q" placeholder="search..." />
        <button type="submit">search</button>
      </form>
      <ul>
      ${body}
      </ul>
    </body>
  </html>
`

const contactTemplate = ({ name, phone }: Contact) =>
  `<li><a href="/contacts?q=${name}">${name}</a> ${phone}</li>`
app.get('/contacts', (req, res) => {
  const { q } = req.query

  if (!q) {
    const html = mainTemplate({
      title: 'Contacts',
      body: contacts.map(contactTemplate).join(''),
    })
    res.send(html)
    return
  }

  const filtered = contacts.filter(contact =>
    contact.name.includes(q.toString()),
  )

  if (filtered.length === 0) {
    res.send('<a href="/contacts">No results. Go back</a>')
    return
  }

  const html = mainTemplate({
    title: 'Search results',
    body: filtered.map(contactTemplate).join(''),
  })

  res.send(html)
  return
})

app.listen(1337, () => {
  console.log('Server listening on port 1337')
})
