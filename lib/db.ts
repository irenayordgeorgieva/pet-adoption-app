import * as dotenv from 'dotenv'
import admin from 'firebase-admin'

dotenv.config()

const serviceAccount = {
  clientEmail: process.env.CLIENT_EMAIL,
  privateKey: (process.env.PRIVATE_KEY ?? '').replace(/\\n/gu, '\n'),
  projectId: process.env.PROJECT_ID,
}

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DB_URL,
  })
}

export default admin.firestore()
