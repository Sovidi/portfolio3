import { dbConnect } from "../route";


export async function GET() {
    const {client, collection} = await dbConnect("comment");
    let data = await collection.find().toArray();

    await client.close();
    return Response.json(data);
}

export async function POST(req) {
    const qData = await req.json();
    const {client, collection} = await dbConnect("comment");
    await collection.insertOne(qData);
    const dataGet = await collection.find().toArray();
    console.log(qData)

    await client.close();
    return Response.json(dataGet);
}

export async function DELETE(req) {
    const qData = await Object.fromEntries(req.nextUrl.searchParams);
    const {client, collection} = await dbConnect("comment");
    await collection.deleteOne({name: qData.name, email: qData.email});
    const dataGet = await collection.find().toArray();

    await client.close();
    return Response.json(dataGet);
}

export async function PUT(req) {
    const qData = await req.json();
    const {client, collection} = await dbConnect("comment");
    await collection.updateOne({name: qData.name, email: qData.email}, {$set:{text: qData.text}});
    const dataGet = await collection.find().toArray();

    await client.close();
    return Response.json(dataGet);
}