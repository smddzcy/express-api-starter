const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const port = process.env.PORT || 3140;

app.use(helmet({ noCache: true, hsts: false }));
app.use(cors({ credentials: true }));

app.get('/', (req, res) => res.json({ status: 'ok' }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
