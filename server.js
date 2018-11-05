import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../', 'server/index.html'));
});

app.use("*", (req, res) => {
  res.status(403).send({ message: "URL not found" });
});

app.listen(PORT, HOST, console.log(`Server running on ${HOST}/${PORT}`));
