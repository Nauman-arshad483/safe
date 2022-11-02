import type { NextApiRequest, NextApiResponse } from "next";
const MongoClient = require("mongodb").MongoClient;
import { CreateAuditDto } from "../../../interfaces/createAudit";
// const Audit = require('../../schema/model')

const auditHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  //Create MongoDB Connection
  const client = await MongoClient.connect(`mongodb://127.0.0.1:27017`);
  const db = client.db("safepress_db");
  const collection = db.collection("Audit");

  const request = {
    data: req.body,
    method: req.method,
  };

  const data: any = request.data;

  // try {
  //   const newAudit = await collection.insertOne(data);
  // } catch (e: any) {
  //   console.log(e);
  // }

  // Audit Controller

  // 1:
  // Method = POST
  // Params = (Actor)
  // Functionality = Create Audit
  if (request.method == "POST") {
    try {
      const newAudit = await collection
        .insertOne(JSON.parse(data))
        .then(() => {
          res.status(200).json(data);
        })
        .catch((e: any) => {
          res.send(e);
          console.log(e)
        });
    } catch (e: any) {
      res.status(404).send(e);
      console.log(e)
    }
  }

  // 2:
  // Method = GET
  // Params = ()
  // Functionality = Get All
  if (request.method == "GET") {
    try {
      const findAll = await collection.find().toArray();
      res.status(200).json(findAll);
    } catch (e) {
      res.status(404).send("Not Found!");
    }
  }
};

export default auditHandler;
