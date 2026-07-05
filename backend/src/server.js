import express from 'express'

const app = express();
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("this is testing api.")

})

app.listen(3000, ()=>{
    console.log(`http://localhost:3000`)
})