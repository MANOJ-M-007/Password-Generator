const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./Middlewares/errorMiddlewares');
const userRoutes = require('./Routes/userRoutes')

dotenv.config()
connectDB()
const PORT = 5000

const app = express()

app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("API is running")
})
app.use(cors())
app.use('/api/user', userRoutes)

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, console.log(`server started on port : ${PORT}`))





