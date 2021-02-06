const express = require('express'),
app = express();

const { response } = require('express');
const request = require('request');



require('dotenv').config()


app.get("/", (req, res) => {
  res.send(
   ` <h1 style="text-align:center; margin-top:200px">Welcome to Enye Currency Data Task</h1>
    <p style="text-align:center">Navigate to <em style="color: red; text-align:center;"> /api/rates </em> for your data</p>
   `
  )
})


app.get("/api/rates", (req, res) => {
  const url = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP';

  request(url, (error, response, body) => {
    if(error){
      // console.log('404 error')
      res.send('404 error')
    } else {
      let data = JSON.parse(body)
      // console.log(data)
      res.send(data)
    } 
  })
})



const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
  console.log(`"Listening on port: ${PORT}"`)
} )


