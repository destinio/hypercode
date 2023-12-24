import { Response, Request } from 'express'
import {
  contactTemplate,
  contractDetailsTemplate,
  mainTemplate,
} from '../temps/index.js'
import { getAllContacts, getFilteredContacts } from '../data/contacts.js'

export function contactsRoute(req: Request, res: Response) {
  const { q } = req.query
  let contacts

  if (!q) {
    contacts = getAllContacts()

    const html = mainTemplate({
      title: 'All Contacts',
      body: contacts.map(contactTemplate).join(''),
      name: '',
    })
    res.send(html)
    return
  }

  const filtered = getFilteredContacts(q.toString())

  if (!filtered) {
    const html = mainTemplate({
      title: 'Search results',
      body: '<p>No results.</p>',
      name: q.toString(),
    })
    res.send(html)
    return
  }

  const html = mainTemplate({
    title: 'Search results',
    body: filtered.map(contactTemplate).join(''),
    name: q.toString(),
  })

  res.send(html)
  return
}

export function contactDetailRoute(req: Request, res: Response) {
  const { name } = req.params
  const contacts = getFilteredContacts(name)

  if (!contacts) {
    res.status(404).send('Not found')
    return
  }

  const contact = contacts[0]

  const html = contractDetailsTemplate({
    name: contact.name,
    body: `<p><strong>Phone:</strong> ${contact.phone}</p>`,
  })

  res.send(html)
}
