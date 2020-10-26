import admin from 'firebase-admin'

const serviceAccount = {
  clientEmail: process.env.CLIENT_EMAIL,
  privateKey: process.env.PRIVATE_KEY,
  projectId: process.env.PROJECT_ID,
}

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DB_URL,
  })
}

export default admin.firestore()
