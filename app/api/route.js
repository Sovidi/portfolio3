export const dbConnect = async (str) => {
    const { MongoClient } = require('mongodb');
    const client = new MongoClient('mongodb+srv://lim132445:zCnCDyeTGM7toUhV@sovidi.v53i9gi.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db("portfolio");
    const collection = db.collection(str);
    console.log("mongodb 접속성공");

    return {client, collection};
};