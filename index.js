const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

//DB_USER = dbUser1
//pass : iZGurGVkjBtelqQU

const uri = "mongodb+srv://dbUser1:iZGurGVkjBtelqQU@cluster0.tqjyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect()
        const serviceCollection = client.db('inventory').collection('item');
        app.get('/', (req, res) => {
            res.send("Electron Inventory Management Server");
        })
    }
    finally {

    }
}
run().catch(console.dir)

app.listen(port, () => {
    console.log("Electron Inventory Management Server", port);
})