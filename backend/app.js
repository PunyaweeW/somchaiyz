import express from "express";

const app = express()
const port = 1997;

app.get('/', (req, res) => {
  res.status(200).send('Oh! Somchaiyz')
})

app.listen(port, () => {
  console.log('Server is running on port 1997')
})