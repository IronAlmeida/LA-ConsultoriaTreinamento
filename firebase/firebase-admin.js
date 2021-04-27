import firebaseAdmin from 'firebase-admin';

export const verifyIdToken = (token) => {
    if (!firebaseAdmin.apps.length) {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert({
            privateKey: process.env.PRIVATE_KEY,
            clientEmail: process.env.CLIENT_EMAIL,
            projectId: process.env.PROJECT_ID,
            }),
        });
    };

    return firebaseAdmin.auth().verifyIdToken(token).catch((error) => {
        throw error;
    });
};



export { firebaseAdmin };