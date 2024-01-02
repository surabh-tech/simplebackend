const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/saurabh',(req,res)=>{
    res.send('hi from saurabh');
})
app.get('/instgram',(req,res)=>{
    res.send("sa");
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})