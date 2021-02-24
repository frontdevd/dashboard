const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const app = express()
const PORT = config.get('serverPort')
const authRouter = require("./routes/auth.routes")
const corsMiddleware = require('./middleware/cors.middleware')
const path = require('path');

app.use(corsMiddleware)
app.use(express.json())
app.use(express.static('static'))
app.use("/api/auth", authRouter)

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Connected to DB!`)
        app.listen(PORT, () => console.log('Server started on port ', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()
