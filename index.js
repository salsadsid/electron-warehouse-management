const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tqjyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: 'unauthorized access' })
    }
    const token = authHeader.split(' ')[1];
    console.log('pofsdf', process.env.ACCESS_TOKEN_SECRET)
    console.log('token', token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        console.log(err)
        if (err) {
            return res.status(403).send({ message: 'Forbidden access' })
        }
        console.log('decoded', decoded);
        req.decoded = decoded;
        next();
    })

}

async function run() {
    try {
        await client.connect()
        const inventoryCollection = client.db('inventory').collection('item');
        const newsCollection = client.db('inventory').collection('news');
        const logoCollection = client.db('inventory').collection('logo');

        app.get('/item', async (req, res) => {
            const query = {};
            const cursor = inventoryCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })
        app.get('/news', async (req, res) => {
            const query = {};
            const cursor = newsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })
        app.get('/logo', async (req, res) => {
            const query = {};
            const cursor = logoCollection.find(query);
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
        app.delete('/item/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await inventoryCollection
                .deleteOne(query)
            res.send(result);
        })
        app.post('/item', async (req, res) => {
            const newItem = req.body;
            console.log(newItem)
            const result = await inventoryCollection.insertOne(newItem);
            res.send(result)
        })
        app.post('/login', async (req, res) => {
            const user = req.body;
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d'
            })
            res.send({ accessToken })
        })
        app.get('/myitem', verifyJWT, async (req, res) => {
            const decodedEmail = req.decoded?.email
            console.log(decodedEmail)
            const email = req.query.email;
            console.log(email)
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = inventoryCollection.find(query)
                const result = await cursor.toArray();
                res.send(result);
            }
            else {
                res.status(403).send({ message: 'forbidden access' })
            }
        })
    }
    finally {

    }
}
run().catch(console.dir)
app.post('/', async (req, res) => {
    res.send('Electron')
})
app.listen(port, () => {
    console.log("Electron Inventory Management Server", port);
})