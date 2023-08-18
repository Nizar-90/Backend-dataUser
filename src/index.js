require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js')

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

// app.method(path, handler);
app.use("/users", usersRoutes);

app.listen(PORT, () => {
   console.log(`server berhasil dirunning di port ${PORT}`);
})