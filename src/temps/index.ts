import { Contact } from '../data/contacts.js'

export const mainTemplate = ({
  title,
  body,
}: {
  title: string
  body: string
}) => `
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

export const contactTemplate = ({ name, phone }: Contact) =>
  `<li><a href="/contacts?q=${name}">${name}</a> ${phone}</li>`
