const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

//DB_USER = dbUser1
//pass : iZGurGVkjBtelqQU
app.use(cors());
app.use(express.json())

const uri = "mongodb+srv://dbUser1:iZGurGVkjBtelqQU@cluster0.tqjyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect()
        const inventoryCollection = client.db('inventory').collection('item');
        app.get('/item', async (req, res) => {
            const query = {};
            const cursor = inventoryCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })
        app.get('/item/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const item = await inventoryCollection.findOne(query);
            res.send(item)
        })
        app.put('/item', async (req, res) => {
            const id = req.body.id;
            const quantity = req.body.quantity;
            const query = { _id: ObjectId(id) }
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    quantity: quantity
                },
            };
            const result = await inventoryCollection.updateOne(query, updateDoc, options);
            res.send(result)
        })
    }
    finally {

    }
}
run().catch(console.dir)

app.listen(port, () => {
    console.log("Electron Inventory Management Server", port);
})