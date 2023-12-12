export const dbConnect = async (str) => {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.S_HOST);
    const db = client.db("portfolio");
    const collection = db.collection(str);
    console.log("mongodb 접속성공");

    return {client, collection};
};