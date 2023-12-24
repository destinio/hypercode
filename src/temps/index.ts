import { Contact } from '../data/contacts.js'

export const mainTemplate = ({
  title,
  body,
  name = '',
}: {
  title: string
  body: string
  name?: string
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="/css/main.css" />
    </head>
    <body>
      <main>
        <h1>${title}</h1>
        <form action="/contacts" method="GET">
          <input type="text" name="q" value="${name}" placeholder="search..." />
          <button type="submit">search</button>
          <a href="/contacts">clear</a>
        </form>
        <ul>
        ${body}
        </ul>
      </main>
    </body>
  </html>
`

export const contactTemplate = ({ name, phone }: Contact) =>
  `<li><a href="/contacts?q=${name}">${name}</a> ${phone}</li>`
