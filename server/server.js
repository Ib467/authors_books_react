const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

require('./config/mongoose.config');

const authorRoutes = require('./routes/author.routes');
authorRoutes(app);

app.listen(8000, () => console.log('listening now!'));