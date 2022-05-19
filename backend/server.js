import express from "express";
import mongoose from "mongoose";
import mongoUrl from "./config.js";
import Data from "./data.js";
import Videos from './schema/dbModel.js';

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
        res.setHeader('Access-Control-Allow-Headers', '*'),
        next()
});

const connection_url = mongoUrl;
// const connection_url = "connection url";

// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });
mongoose.connect(connection_url);

app.get('/', (req, res) =>
    res.status(200).send("hello world!")
);

app.get('/v1/posts', (req, res) =>
    res.status(200).send(Data)
);

app.get("/v2/posts", (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post("/v2/posts", (req, res) => {
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
});

app.listen(port, () => console.log("Listening on port " + port));