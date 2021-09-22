import { MongoClient } from "mongodb";

// /api/meetups
// GET /api/meetups

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://abanoub_zaky:bebobebo@cluster0.oxo4t.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find().toArray();
  console.log(result);
  client.close();

  res.status(200).json(result);
}

export default handler;
