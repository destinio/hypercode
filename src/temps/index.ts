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

export const contactTemplate = ({ name }: Contact) =>
  `<li><a href="/contacts/${name}">${name}</a></li>`

export const contractDetailsTemplate = ({
  body,
  name,
}: {
  body: string
  name: string
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${name}</title>
      <link rel="stylesheet" href="/css/main.css" />
    </head>
    <body>
      <main>
        <h1>${name}</h1>
        <a href="/contacts">back</a>
        ${body}
        <nav>
          <a href="/contacts/${name}/edit">edit</a>
          <a href="/contacts/${name}/delete">delete</a>
        </nav>
      </main>
    </body>
  </html>
`
