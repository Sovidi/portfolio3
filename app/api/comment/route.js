import { dbConnect } from "../route";

export async function GET() {
  const { client, collection } = await dbConnect("comment");
  let data = await collection.find().toArray();

  return Response.json(data);
}

export async function POST(req) {
  const qData = await req.json();
  const { client, collection } = await dbConnect("comment");
  await collection.insertOne(qData);
  const dataGet = await collection.find().toArray();

  return Response.json(dataGet);
}

export async function DELETE(req) {
  const qData = await Object.fromEntries(req.nextUrl.searchParams);
  const { client, collection } = await dbConnect("comment");
  const dataGet = await collection.find({ name: qData.name, email: qData.email }).toArray();
  if (dataGet.length > 0) {
    await collection.deleteOne({ name: qData.name, email: qData.email });

    return Response.json("댓글이 삭제되었습니다.");
  } else {
    return Response.json("이메일을 확인해주세요.");
  }
}

export async function PUT(req) {
  const qData = await req.json();
  const { client, collection } = await dbConnect("comment");
  const dataGet = await collection.find({ name: qData.name, email: qData.email }).toArray();
  if (dataGet.length > 0) {
    await collection.updateOne({ name: qData.name, email: qData.email }, { $set: { text: qData.text } });

    return Response.json("댓글이 수정되었습니다.");
  } else {
    return Response.json("이메일을 확인해주세요.");
  }
}
