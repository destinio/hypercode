import { Response, Request } from 'express'
import { contactTemplate, mainTemplate } from '../temps/index.js'
import { contacts } from '../data/contacts.js'

export function contactRoute(req: Request, res: Response) {
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
}
