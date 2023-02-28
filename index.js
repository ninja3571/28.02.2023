const express =require('express')
const cors = require('cors')
const port = 3000
const app = express()

app.use(cors())

app.get("/",function(req,res){
    res.set("ok")
} )

app.get("/get/:imie/:nazwisko", function(req,res){
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko

    console.log(imie)
    console.log(nazwisko)
})
app.listen(3000)