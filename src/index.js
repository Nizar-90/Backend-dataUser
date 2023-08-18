require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets',express.static('public/images'))

// app.method(path, handler);
app.use("/users", usersRoutes);
app.post("/upload",upload.single('photo'),(req, res) => {
   res.json({
      message: "upload Berhasil!"
   })
})

app.use((err, req, res, next) => {
   res.json({
      message : "file too large!",
   })
})

app.listen(PORT, () => {
   console.log(`server berhasil dirunning di port ${PORT}`);
})