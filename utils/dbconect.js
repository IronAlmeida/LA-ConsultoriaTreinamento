import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function connection() {
    if (!client.isConnected()) await client.connect();

    const db = client.db('LA-Consultoria&Treinamentos');

    return { db, client}
}