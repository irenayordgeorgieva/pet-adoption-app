import admin from "firebase-admin"

const serviceAccount = {
  "projectId": process.env.PROJECT_ID,
  "privateKey": process.env.PRIVATE_KEY,
  "clientEmail": process.env.CLIENT_EMAIL
}

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DB_URL
  })
}

export default admin.firestore()
