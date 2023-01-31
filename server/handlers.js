const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");

const getDBinfo = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("guests");

  try {
    console.log("connected");
    const dbInfo = await db.collection("people").find().toArray();
    res.status(200).json({ status: 200, data: dbInfo });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, Message: "Nothing was found", error: err });
  }
  client.close();
  console.log("Disconnected");
};

const submitToDb = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("guests");
  const informationFromUser = req.body;

  try {
    const submitedData = await db
      .collection("replies")
      .insertOne({ ...informationFromUser });
    console.log("submitedData", submitedData);
    res.status(200).json({ status: 200, submittedData: req.body });
  } catch (err) {
    console.log(err);
  }

  client.close();
};

module.exports = { getDBinfo, submitToDb };
