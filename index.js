import express from 'express'
import cors from 'cors'
import router from './router.js'

const app = express()

app.use(express.json())

app.use(cors())

const errorHandler = (error, req, res, next)  => {
    console.log(">>>>>>Eroor", error.message);
    res.status(401).json({status: 'fail', error : error.message})
    // Error handling middleware functionality
}

app.use(router)

app.use((errorHandler))

app.listen(5050, () => {
    console.log("app listening at port 5050");
})