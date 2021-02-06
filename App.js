const express = require('express'),
app = express();

const { response } = require('express');
const request = require('request');



require('dotenv').config()


app.get("/", (req, res) => {
  res.send(
   ` <h1>Welcome to Enye Currency Data Task</h1>
    <p>Navigate to <em style="color: red; text-align:center;">localhost:4000/api/rates</em> for your data</p>
   `
  )
})


app.get("/api/rates", (req, res) => {
  const url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=USD';

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


