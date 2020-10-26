import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  return new Promise((resolve) => {
    db.collection('pets').get()
      .then(snapshot => snapshot.docs.map(doc => doc.data()))
      .then((pets) => {
        if (pets.length === 0) {
          res.status(204).end()
        } else {
          res.status(200).json(pets)
        }
        resolve()
      })
      .catch((err) => {
        res.status(405).json(err)
        resolve()
      })
  })
}
