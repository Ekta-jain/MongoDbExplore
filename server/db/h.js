//import { MongoClient } from "mongodb";
const MongoClient = require('mongodb');
const connectionString = process.env.ATLAS_URI || "";


const p = 'FsYNgIqTHIQWqGDv';
    const uri = "mongodb+srv://admin:"+p+"@cluster0.khbktxq.mongodb.net/?retryWrites=true&w=majority";



    async function main(){
        const client = new MongoClient.MongoClient(uri);
        let conn;
        try {
          conn = await client.connect();
          console.log("connection done");
        } catch(e) {
          console.error(e);
        }
        let db = conn.db("sample_airbnb");
       
        // export default db;
    }

main()