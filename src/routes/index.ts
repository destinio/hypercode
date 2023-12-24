import { Request, Response } from 'express'

export function mainRoute(req: Request, res: Response) {
  res.redirect('/contacts')
}
